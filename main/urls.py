from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from  main.views import IndexImage
from django.conf import settings

urlpatterns = [
    path('', IndexImage.as_view(), name='home' ),
    path('login/', views.login, name='login'),
    #path('home/', IndexImage.as_view(), name='home' ),
    path('', views.Imag, name='imag')

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)