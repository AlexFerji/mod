from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .models import Image
from .forms import ImageForm
from django.views.generic import  CreateView




class ImageCreate(CreateView):
    # Модель куда выполняется сохранение
    model = Image
    # Класс на основе которого будет валидация полей
    form_class = ImageForm
    # Выведем все существующие записи на странице
    extra_context = {'books': Image.objects.all()}
    # Шаблон с помощью которого
    # будут выводиться данные
    template_name = 'image_create.html'
    # На какую страницу будет перенаправление
    # в случае успешного сохранения формы
    success_url = '/'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ImageCreate, self).form_valid(form)

# Create your views here.
