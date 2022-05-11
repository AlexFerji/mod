from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from users.models import CustomUser
from django.db.models import CheckConstraint, Q, UniqueConstraint
from django.contrib.contenttypes.fields import GenericRelation
from star_ratings.models import Rating

def user_directory_path(instance, filename):
    # Путь куда будет осуществленная загрузка MEDIA_ROOT/user_<id>/filename

    return 'user_{0}/{1}'.format(instance.user.email, filename)


class Category (models.Model):
    name = models.CharField(max_length=64, verbose_name='Название')

    def __str__(self):
        return self.name



class Image(models.Model):

    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE, verbose_name="Почта" )
    author = models.CharField(max_length=50, null=True, blank=False, verbose_name='Автор')
    title = models.CharField(max_length=20, verbose_name="Название")
    description = models.TextField(max_length=150, null=True, verbose_name="Описание")
    category = models.ForeignKey(Category("verbose_name"), on_delete=models.CASCADE, verbose_name='Категория')
    cover = models.ImageField(upload_to=user_directory_path)
    ratings = GenericRelation(Rating, related_query_name='foos')
    def __str__(self):
        return self.title




class Foo(models.Model):
    image = models.CharField(Image, max_length=100)
    ratings = GenericRelation(Rating, related_query_name='foos')

# Foo.objects.filter(ratings__isnull=False).order_by('ratings__average')

# Create your models here.
