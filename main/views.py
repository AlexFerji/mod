from __future__ import unicode_literals
import requests
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

from visual_image.models import Image, Category
from .filters import ImageFilter
from visual_image.serialaizers import ImagePostSerializer
from  visual_image.serialaizers import ImageSerializer
from rest_framework.generics import ListAPIView

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from django.http import JsonResponse

from star_ratings.models import Rating


#
#
#
# def test(request):
#
#     response = {
#         'category': [
#             {
#                 'name':c.name
#
#             }
#             for c in Category.objects.all()
#         ],
#         'image': [
#             {
#                 'user': image.user.email,
#                 'author': image.author,
#                 'title': image.title,
#                 'description': image.description,
#                 'category': image.category.name,
#                 'cover': image.cover.url,
#                 #'ratings': image.ratings
#             }
#             for image in Image.objects.all()
#         ]
#     }
#     return JsonResponse(response)
#
#
#
# class jsoneIndex(APIView):
#     serializer_class = ImageSerializer
#     model = Image
#
#     # Функция отрисовки
#     def get(self, request):
#         # Получаем набор всех записей из таблицы Image
#         queryset = Image.objects.all()
#         # Сериализуем извлечённый набор записей
#         serializer_for_queryset = ImageSerializer(
#             instance=queryset,  # Передаём набор записей
#             many=True  # Указываем, что на вход подаётся именно набор записей
#         )
#
#         return Response(serializer_for_queryset.data)
#
#
# class IndexImage(APIView):
#     serializer_class = ImagePostSerializer
#     model = Image
#
#     # Функция отрисовки
#     def get(self, request):
#         # Получаем набор всех записей из таблицы Image
#         queryset = Image.objects.all('title')
#         # Сериализуем извлечённый набор записей
#         serializer_for_queryset = ImagePostSerializer(
#             instance=queryset,  # Передаём набор записей
#             many=True  # Указываем, что на вход подаётся именно набор записей
#         )
#
#         return Response(serializer_for_queryset.data)
#


class Image(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ImageFilter



# def filter_set(request):
#     image = Image.objects.all()
#     serializer_class = ImageSerializer
#
#     images = ImageFilter(request.GET, queryset=image)
#     return render(request, 'main/index.html', {"filter": images})





# def index (request):
#     if request.method == 'GET':
#         image = Image.objects.all()
#         images = ImageFilter(request.GET, queryset=image)
#         return render(request, 'main/index.html', {"filter": images})
#
#


def veriv(request):

    return  render(request, 'main/verify-user.html')

def login(request):

    return render(request, 'registration/login.html')

def Imag(request):
    return render(request, 'image_create.html')
