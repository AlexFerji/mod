from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic.list import ListView
from visual_image.models import Image
#from main.views import indexImage
urlpatterns = [
    path('', views.index, name='home'),
    path('filter/', views.filter, name='filter'),
    path('login/', views.login, name='login'),
    path('', views.Imag, name='imag')

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)