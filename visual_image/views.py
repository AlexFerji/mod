from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .models import Image
from .forms import ImageForm
from .serialaizers import ImageSerializer
from django.views.generic import  CreateView
from visual_image.serialaizers import ImagePostSerializer
from rest_framework.generics import ListAPIView

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class UploadImage(APIView):
    serializer_class = ImagePostSerializer
    model = Image

    # Функция отрисовки
    # def get(self, request):
    #     # Получаем набор всех записей из таблицы Image
    #     queryset = Image.objects.all()
    #     # Сериализуем извлечённый набор записей
    #     serializer_for_queryset = ImagePostSerializer(
    #         instance=queryset,  # Передаём набор записей
    #         many=True  # Указываем, что на вход подаётся именно набор записей
    #     )
    #
    #     return Response(serializer_for_queryset.data)



    def post(self, request):
        serializer_for_image = self.serializer_class(data=request.data)
        serializer_for_image.is_valid(raise_exception=True)
        serializer_for_image.save(user=request.user)
        return Response(data=serializer_for_image.data, status=status.HTTP_201_CREATED)


#
# class ImageCreate(CreateView):
#     # Модель куда выполняется сохранение
#     model = Image
#     # Класс на основе которого будет валидация полей
#     form_class = ImageForm
#     # Выведем все существующие записи на странице
#     extra_context = {'books': Image.objects.all()}
#     # Шаблон с помощью которого
#     # будут выводиться данные
#     template_name = 'image_create.html'
#     # На какую страницу будет перенаправление
#     # в случае успешного сохранения формы
#     success_url = '/'
#
#     def form_valid(self, form):
#         form.instance.user = self.request.user
#         return super(ImageCreate, self).form_valid(form)
#
# # Create your views here.
