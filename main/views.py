from django.shortcuts import render
from visual_image.models import Image
from .filters import ImageFilter


def filter (request):
    image = Image.objects.all()
    images = ImageFilter(request.GET, queryset=image)
    return render(request, 'main/index.html', {"filter": images})


def index (request):
    if request.method == 'GET':
        image = Image.objects.all()
        images = ImageFilter(request.GET, queryset=image)
        #images = Image.objects.all()
        return render(request, 'main/index.html', {"filter": images})





def login(request):

    return render(request, 'registration/login.html')

def Imag(request):
    return render(request, 'image_create.html')
