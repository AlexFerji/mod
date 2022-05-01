from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
# функция для возврата картинки
from .import views
from visual_image.views import ImageCreate
from main.views import IndexImage

urlpatterns = [
    # Url и функция, которая вернет картинку
    path('', views.home_page),
    path('image/', ImageCreate.as_view(), name='image'),
]

# включаем возможность обработки картинок
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)