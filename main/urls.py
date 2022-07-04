from __future__ import unicode_literals

from django.contrib import admin
from django.urls import path
from main.views import  Image
from django.conf.urls.static import static
from django.conf import settings
from main import views
from rest_framework import routers


# router = routers.DefaultRouter()
# router.register(r'home', views.Index)

urlpatterns = [
    path('', Image.as_view(), name='home'),
    # path('test/', views.test, name='test'),
    # path('image/', jsoneIndex.as_view(), name='image' ),
    # path('', IndexImage.as_view(), name='home'),



] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)