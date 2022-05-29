from django.contrib import admin
from django.urls import path, include
from main.views import Image
from django.conf.urls.static import static
from django.conf import settings

from rest_framework import routers
from visual_image import views
from main import views


# router = routers.DefaultRouter()
# router.register(r'home', views.Index)

urlpatterns = [
      # path('', include(router.urls)),
      # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
    path('', Image.as_view(), name='home'),
   # path('verif/', views.veriv, 'verif'),



] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)