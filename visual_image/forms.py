from .models import Image
from django.forms import ModelForm




class ImageForm(ModelForm):



    class Meta:
        # Название модели на основе
        # которой создается форма
        model = Image
        # Включаем все поля с модели в форму
        fields = ['author',
                  'title',
                  'description',
                  'category',
                  'cover',
                  ]


