from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.views.generic.list import ListView
from  main.views import IndexImage
from django.conf import settings
from visual_image.models import Foo


urlpatterns = [
    path('', IndexImage.as_view(), name='home'),
    path('', ListView.as_view(queryset=Foo.objects.filter(ratings__isnull=False).order_by('ratings__average'),
                              template_name="main/index.html")),
    path('login/', views.login, name='login'),
    #path('home/', IndexImage.as_view(), name='home' ),
    path('', views.Imag, name='imag')

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)