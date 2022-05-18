from django_filters import  rest_framework as filters
from visual_image.models import Image
import django_filters.rest_framework

class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter, filters.MultipleChoiceFilter):
    pass


class ImageFilter(filters.FilterSet):
    #
    # author = CharFilterInFilter(field_name='author__name', lookup_expr='in')
    # category = CharFilterInFilter(field_name='category__name', lookup_expr='in')
    # year = filters.RangeFilter()
    category = filters.AllValuesFilter(widget=django_filters.widgets.LinkWidget)
    author = filters.AllValuesFilter(widget=django_filters.widgets.LinkWidget)
    class Meta:
        model = Image
        fields = ['author', 'category',]
