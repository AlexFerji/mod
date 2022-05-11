from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic.list import ListView
from visual_image.models import Image
urlpatterns = [
    path('', views.index, name='home'),
    path('', ListView.as_view(queryset=Image.objects.filter(ratings__isnull=False).order_by('ratings__average'),
                                 template_name="main/index.html")),
    path('login/', views.login, name='login'),
    path('', views.Imag, name='imag')

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)