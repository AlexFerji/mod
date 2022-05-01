from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    Менеджер пользовательских моделей пользователей, где электронная почта является уникальным идентификатором
    для аутентификации вместо имен пользователей.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Создайте и сохраните пользователя с указанным адресом электронной почты и паролем.
        """
        if not email:
            raise ValueError(_('Адрес электронной почты должен быть установлен'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password()
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Создайте и сохраните суперпользователя с указанным адресом электронной почты и паролем.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)