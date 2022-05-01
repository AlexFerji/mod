"""
Классы исключений, используемые в рабочих процессах регистрации.

"""


class RegistrationError(Exception):
    """
    Базовый класс для ошибок регистрации.

    """

    def __init__(self, message, code=None, params=None):
        super(RegistrationError, self).__init__(message, code, params)
        self.message = message
        self.code = code
        self.params = params


class ActivationError(RegistrationError):
    """
    Базовый класс для ошибок активации учетной записи.

    """

    pass