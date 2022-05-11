from .models import Image
from django.forms import ModelForm
from django import forms




class ImageForm(forms.ModelForm):



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


