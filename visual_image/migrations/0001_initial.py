# Generated by Django 4.0.4 on 2022-04-25 09:30

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import visual_image.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='Название')),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=50, null=True, verbose_name='Автор')),
                ('title', models.CharField(max_length=20, verbose_name='Название')),
                ('description', models.TextField(max_length=150, null=True, verbose_name='Описание')),
                ('cover', models.ImageField(upload_to=visual_image.models.user_directory_path)),
                ('rating', models.SmallIntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='visual_image.category', verbose_name='Категория')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Почта')),
            ],
        ),
    ]
