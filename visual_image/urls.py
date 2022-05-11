from django.contrib import admin
from django.urls import path
from visual_image.views import ImageCreate

urlpatterns = [
    path('image/', ImageCreate.as_view(), name='image'),
]
