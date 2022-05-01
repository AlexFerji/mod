from django.urls import path
from django.views.generic.base import TemplateView
from django.contrib.auth import views

from . import views

urlpatterns = [
    path(
        "activate/complete/",
        TemplateView.as_view(
            template_name="registration/activation_complete.html"
        ),
        name="registration_activation_complete",
    ),
    path(
        "activate/<str:activation_key>/",
        views.ActivationView.as_view(),
        name="registration_activate", #!!!!!!!!!!
    ),
    path(
        "register/",
        views.RegistrationView.as_view(),
        name="registration_register",
    ),
    path(
        "register/complete/",
        TemplateView.as_view(
            template_name="registration/registration_complete.html"
        ),
        name="registration_complete",
    ),
    path(
        "register/closed/",
        TemplateView.as_view(
            template_name="registration/registration_closed.html"
        ),
        name="registration_disallowed",
    ),

]