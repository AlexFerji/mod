from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from rest_framework import routers
# from main.views import Image
#
#
# router = routers.SimpleRouter()
# router.register(r'image',Image)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('', include('users.urls')),
    # path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('visual_image.urls')),
    path('ratings/', include('star_ratings.urls', namespace='ratings')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:

    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)