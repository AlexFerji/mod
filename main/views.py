from django.shortcuts import render
from visual_image.models import Image

def index(request):
    if request.method == 'GET':
        images = Image.objects.order_by('title')
        return render(request, 'main/index.html', {"images": images })



def login(request):

    return render(request, 'registration/login.html')

def Imag(request):
    return render(request, 'image_create.html')
