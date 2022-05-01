from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.sites.shortcuts import get_current_site
from django.core import signing
from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

from django.contrib.auth import models

from User_signup import signals
from User_signup.exceptions import ActivationError
from User_signup.views import ActivationView as BaseActivationView
from User_signup.views import RegistrationView as BaseRegistrationView

REGISTRATION_SALT = getattr(settings, "REGISTRATION_SALT", "registration")


class RegistrationView(BaseRegistrationView):
    """
    Зарегистрируйте новую (неактивную) учетную запись пользователя, сгенерируйте ключ активации
    и отправьте его пользователю по электронной почте.

     Это отличается от рабочего процесса активации на основе модели тем, что
    ключом активации является имя пользователя, подписанное с помощью Django
     Указатель временных меток с проверкой HMAC при активации.

    """

    email_body_template = "registration/activation_email_body.txt"
    email_subject_template = "registration/activation_email_subject.txt"
    success_url = reverse_lazy("registration_complete")

    def register(self, form):
        new_user = self.create_inactive_user(form)
        signals.user_registered.send(
            sender=self.__class__, user=new_user, request=self.request
        )
        return new_user

    def create_inactive_user(self, form):
        """
        Создайте учетную запись неактивного пользователя и отправьте электронное письмо с
        инструкциями по активации.

        """
        new_user = form.save(commit=False)
        new_user.is_active = False
        new_user.save()

        self.send_activation_email(new_user)

        return new_user

    def get_activation_key(self, user):
        """
        Сгенерируйте ключ активации, который будет отправлен пользователю по электронной почте.

        """
        return signing.dumps(obj=user.get_username(), salt=REGISTRATION_SALT)

    def get_email_context(self, activation_key):
        """
       Создайте контекст шаблона, используемый для письма с активацией.

        """
        scheme = "https" if self.request.is_secure() else "http"
        return {
            "scheme": scheme,
            "activation_key": activation_key,
            "expiration_days": settings.ACCOUNT_ACTIVATION_DAYS,
            "site": get_current_site(self.request),
        }

    def send_activation_email(self, user):
        """
        Отправьте электронное письмо для активации. Ключом активации является имя пользователя,
        подписанное с помощью TimestampSigner.

        """
        activation_key = self.get_activation_key(user)
        context = self.get_email_context(activation_key)
        context["user"] = user
        subject = render_to_string(
            template_name=self.email_subject_template,
            context=context,
            request=self.request,
        )
        # Принудительно привязать объект к одной строке, чтобы избежать введения заголовка
        # проблемы.
        subject = "".join(subject.splitlines())
        message = render_to_string(
            template_name=self.email_body_template,
            context=context,
            request=self.request,
        )




        user.email_user(subject, message, settings.DEFAULT_FROM_EMAIL)


class ActivationView(BaseActivationView):
    """
    Получив действительный ключ активации, активируйте
    учетную запись пользователя. В противном случае отобразится сообщение об ошибке, в котором указано, что учетная
    запись не может быть активирована.

    """

    ALREADY_ACTIVATED_MESSAGE = _(
        "Учетная запись, которую вы пытались активировать, уже активирована."
    )
    BAD_USERNAME_MESSAGE = _("The account you attempted to activate is invalid.")
    EXPIRED_MESSAGE = _("This account has expired.")
    INVALID_KEY_MESSAGE = _("The activation key you provided is invalid.")
    success_url = reverse_lazy("registration_activation_complete")

    def activate(self, *args, **kwargs):
        username = self.validate_key(kwargs.get("activation_key"))
        user = self.get_user(username)
        user.is_active = True
        user.save()
        return user

    def validate_key(self, activation_key):
        """
        Убедитесь, что ключ активации действителен и находится в пределах
        разрешенного времени активации, верните имя пользователя, если
        оно действительное, или поднимите `ActivationError`, если нет.

        """
        try:
            username = signing.loads(
                activation_key,
                salt=REGISTRATION_SALT,
                max_age=settings.ACCOUNT_ACTIVATION_DAYS * 86400,
            )
            return username
        except signing.SignatureExpired:
            raise ActivationError(self.EXPIRED_MESSAGE, code="expired")
        except signing.BadSignature:
            raise ActivationError(
                self.INVALID_KEY_MESSAGE,
                code="invalid_key",
                params={"activation_key": activation_key},
            )

    def get_user(self, username):
        """
        Учитывая подтвержденное имя пользователя, найдите и верните
        соответствующую учетную запись пользователя, если она существует, или поднимите
         `Ошибка активации`, если это не так.

        """
        User = get_user_model()
        try:
            user = User.objects.get(**{User.USERNAME_FIELD: username})
            if user.is_active:
                raise ActivationError(
                    self.ALREADY_ACTIVATED_MESSAGE, code="already_activated"
                )
            return user
        except User.DoesNotExist:
            raise ActivationError(self.BAD_USERNAME_MESSAGE, code="bad_username")