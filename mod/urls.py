from django.contrib import admin
from django.urls import path, include
from  django.views.generic.base import TemplateView
from  main.views import IndexImage
from django.contrib.auth.views import auth_logout
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', include('users.urls')),
    path('accounts/', include('User_signup.backends.activation.urls')),
    path('users/', include('django.contrib.auth.urls')),
    path('', include('social_django.urls', namespace='social')),
    # path('logout/', auth_logout, {'next_page': settings.LOGOUT_REDIRECT_URL},
    # name='logout'),
    path('home/', IndexImage.as_view(template_name='main/index.html'), name='home'),
    path('', include('visual_image.urls')),
    path('ratings/', include('star_ratings.urls', namespace='ratings')),

]
