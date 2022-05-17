from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', include('users.urls')),
    path('accounts/', include('User_signup.backends.activation.urls')),
    path('users/', include('django.contrib.auth.urls')),
    path('', include('social_django.urls', namespace='social')),
    path('', include('visual_image.urls')),
    path('ratings/', include('star_ratings.urls', namespace='ratings')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:

    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)