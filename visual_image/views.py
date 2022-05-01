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
    success_url = '/home/'



def home_page(request):
    # POST - обязательный метод
    if request.method == 'POST' and request.FILES:
        # получаем загруженный файл
        file = request.FILES['myfile1']
        fs = FileSystemStorage()
        # сохраняем на файловой системе
        filename = fs.save(file.name, file)
        # получение адреса по которому лежит файл
        file_url = fs.url(filename)
        return render(request, 'main/index.html', {
            'file_url': file_url
        })
    return render(request, 'main/index.html.html')

# Create your views here.
