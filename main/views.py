from django.shortcuts import render
from visual_image.forms import ImageForm
from visual_image.models import Image
from django.views.generic import CreateView




def login(request):

    return render(request, 'registration/login.html')

def Imag(request):
    return render(request, 'image_create.html')



class IndexImage(CreateView):
    # Модель куда выполняется сохранение
    model = Image
    # Класс на основе которого будет валидация полей
    form_class = ImageForm
    # Выведем все существующие записи на странице
    extra_context = {'books': Image.objects.all()}
    # Шаблон с помощью которого
    # будут выводиться данные
    template_name = 'main/index.html'

    def index(request):
        return render(request, 'main/index.html')

