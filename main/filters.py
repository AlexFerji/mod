from django_filters import  rest_framework as filters
from visual_image.models import Image
import django_filters.rest_framework

from django.db import models
from django import forms

class NumberInFilter(django_filters.BaseInFilter, django_filters.NumberFilter):
    pass



class ImageFilter(filters.FilterSet):


    category = filters.AllValuesFilter(widget=django_filters.widgets.LinkWidget, field_name='category__name', lookup_expr='iexact')
    author = filters.AllValuesFilter(widget=django_filters.widgets.LinkWidget,field_name='author', lookup_expr='iexact')
    ratings = filters.AllValuesFilter(field_name='ratings__average')
    o = filters.OrderingFilter(fields=({'ratings__average': 'ratings'}),  field_labels={'ratings__average': 'Рейтинг',}, widget=django_filters.widgets.LinkWidget)

    class Meta:
        model = Image
        fields = ['category', 'author', 'o']