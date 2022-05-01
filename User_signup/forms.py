"""
Формы и код подтверждения для регистрации пользователя.

Обратите внимание, что все эти формы предполагают, что ваша пользовательская модель аналогична по
структуре пользовательскому классу Django по умолчанию. Если ваша пользовательская модель
существенно отличается, вам может потребоваться написать свой собственный класс формы;
примечания по пользовательским пользовательским моделям с
помощью django-registration см. в документации.

"""

from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.forms import AuthenticationForm, UsernameField
from users.models import CustomUser
from django.contrib.auth.models import User

from User_signup import validators

User = get_user_model()



class RegistrationForm(UserCreationForm):
    """
    Форма для регистрации новой учетной записи пользователя.

     Проверяет, что запрошенное имя пользователя еще не используется, и
    требует, чтобы пароль был введен дважды, чтобы выявить опечатки.

     Подклассы должны свободно добавлять любую дополнительную проверку, в которой они
    нуждаются, но должны соблюдать осторожность при переопределении `сохранить()`, чтобы учитывать
    аргумент `фиксация = ложь`, поскольку несколько рабочих процессов регистрации
    будут использовать его для создания неактивных учетных записей пользователей.

    """
    email = forms.EmailField(max_length=200, help_text='Required')
    tos = forms.BooleanField(widget=forms.CheckboxInput,
                             label="Я прочитал и согласен с Условиями предоставления услуг",
                             error_messages={"required": validators.TOS_REQUIRED},)

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = [
            'email',
            'first_name',
            'last_name',
            "password1",
            "password2",
            'tos'
        ]

    error_css_class = "error"
    required_css_class = "required"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        email_field = User.get_email_field_name()
        if hasattr(self, "reserved_names"):
            reserved_names = self.reserved_names
        else:
            reserved_names = validators.DEFAULT_RESERVED_NAMES
        username_validators = [
            validators.ReservedNameValidator(reserved_names),
            validators.validate_confusables,
        ]
        self.fields[User.USERNAME_FIELD].validators.extend(username_validators)
        self.fields[email_field].validators.extend(
            (validators.HTML5EmailValidator(), validators.validate_confusables_email)
        )
        self.fields[email_field].required = True


class RegistrationFormCaseInsensitive(RegistrationForm):
    """
    Подкласс `Регистрационной формы`, обеспечивающий
    уникальность имен пользователей без учета регистра.

    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields[User.USERNAME_FIELD].validators.append(
            validators.CaseInsensitiveUnique(
                User, User.USERNAME_FIELD, validators.DUPLICATE_USERNAME
            )
        )





# creating a form