import requests
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

from visual_image.models import Image
from .filters import ImageFilter
from visual_image.serialaizers import ImageSerializer
from rest_framework.generics import ListAPIView



class Image(ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ImageFilter
    template_name = 'main/index.html'



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
