from django.contrib import admin
from django.urls import path
from visual_image.views import UploadImage

urlpatterns = [
    path('upload/', UploadImage.as_view(), name='upload'),
    #path('image/', ImageCreate.as_view(), name='image'),
]
