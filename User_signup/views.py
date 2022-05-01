"""
Базовые классы представления для всех рабочих процессов регистрации.

"""
from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.exceptions import ImproperlyConfigured
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.utils.encoding import force_str
from django.views.decorators.debug import sensitive_post_parameters
from django.views.generic.base import TemplateView
from django.views.generic.edit import FormView

import users.models
from . import signals
from .exceptions import ActivationError
from .forms import RegistrationForm

USER_MODEL_MISMATCH ="""
Вы пытаетесь использовать представление регистрации {представление}
с классом формы {form},
но модель, используемая этой формой ({form_model}), не
является моделью пользователя вашей установки Django ({user_model}).

Чаще всего это происходит из-за того, что вы используете пользовательскую модель пользователя, но
забыли указать для нее класс пользовательской формы регистрации. 
При использовании пользовательской модели пользователя требуется указать класс пользовательской регистрационной формы
. Пожалуйста, ознакомьтесь с документацией django-registration по пользовательским пользовательским
моделям для получения более подробной информации.
"""


class RegistrationView(FormView):
    """
    Базовый класс для представлений регистрации пользователей.

    """

    disallowed_url = reverse_lazy("Users_disallowed")
    form_class = RegistrationForm
    success_url = None
    template_name = "registration/registration_form.html"

    @method_decorator(sensitive_post_parameters())
    def dispatch(self, *args, **kwargs):
        """
        Убедитесь, что регистрация пользователя разрешена, прежде чем даже потрудиться
        отправить или выполнить другую обработку.

        """
        if not self.registration_allowed():
            return HttpResponseRedirect(force_str(self.disallowed_url))
        return super().dispatch(*args, **kwargs)

    def get_form(self, form_class=None):
        """
        Возвращает экземпляр формы, которая будет использоваться в этом представлении.

         Это переопределение базовой версии этого метода в
        FormMixin Django, которое немедленно и громко прерывается, если
        модель класса формы этого представления не соответствует пользовательской модели
        , для которой был настроен Django.

         Чаще всего это происходит из-за того, что Django
        настроен на использование пользовательской модели пользователя, но разработчик
        забыл также настроить соответствующую пользовательскую регистрационную
        форму в соответствии с ней.

        """
        if form_class is None:
            form_class = self.get_form_class()
        form_model = form_class._meta.model
        user_model = get_user_model()
        if form_model._meta.label != user_model._meta.label:
            raise ImproperlyConfigured(
                USER_MODEL_MISMATCH.format(
                    view=self.__class__,
                    form=form_class,
                    form_model=form_model,
                    user_model=user_model,
                )
            )
        return form_class(**self.get_form_kwargs())

    def get_success_url(self, user=None):
        """
        Верните URL-адрес для перенаправления после успешного перенаправления.

        """
        # Это переопределено исключительно для того, чтобы разрешить регистрацию django для
        # # поддержки передачи учетной записи пользователя в качестве аргумента; в противном случае
        # # может быть вызвана реализация базовой формы FormMixin, которая не принимает
        # # аргументы и в конечном итоге вызывает ошибку типа.
        return super().get_success_url()

    def form_valid(self, form):
        return HttpResponseRedirect(self.get_success_url(self.register(form)))

    def registration_allowed(self):
        """
        Переопределите это, чтобы включить/ отключить регистрацию пользователей либо
        глобально, либо по каждому запросу.

        """
        return getattr(settings, "REGISTRATION_OPEN", True)

    def register(self, form):
        """
        Реализуйте логику регистрации пользователей здесь. Доступ как к
        запросу, так и к регистрационной форме доступен здесь.

        """
        raise NotImplementedError


class ActivationView(TemplateView):
    """
   Базовый класс для представлений активации пользователя.

    """

    success_url = None
    template_name = "registration/activation_failed.html"

    def get_success_url(self, user=None):
        """
        Верните URL-адрес для перенаправления после успешного перенаправления.

        """
        return force_str(self.success_url)

    def get(self, *args, **kwargs):
        """
        Базовая логика активации; подклассы должны оставить этот метод
        в покое и реализовать activate(), который вызывается из этого
        метода.

        """
        extra_context = {}
        try:
            activated_user = self.activate(*args, **kwargs)
        except ActivationError as e:
            extra_context["activation_error"] = {
                "message": e.message,
                "code": e.code,
                "params": e.params,
            }
        else:
            signals.user_activated.send(
                sender=self.__class__, user=activated_user, request=self.request
            )
            return HttpResponseRedirect(force_str(self.get_success_url(activated_user)))
        context_data = self.get_context_data()
        context_data.update(extra_context)
        return self.render_to_response(context_data)

    def activate(self, *args, **kwargs):
        """
        Реализуйте логику активации учетной записи здесь.

        """
        raise NotImplementedError