"""
Пользовательские сигналы, отправляемые во время процессов регистрации и активации.

"""

from django.dispatch import Signal

# A new user has registered.
# Provided args: user, request
user_registered = Signal()

# A user has activated his or her account.
# Provided args: user, request
user_activated = Signal()