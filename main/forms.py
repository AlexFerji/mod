from rest_framework import generics
from django_filters import rest_framework as filters
from visual_image.models import Image
import django_filters
from django.db import models
from django import forms

# class ImageFilterForm(django_filters.FilterSet):
#    # name = django_filters.CharFilter(lookup_expr='iexact')
#     class Meta:
#         model = Image
#         fields = ['author', 'title']
