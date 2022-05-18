from rest_framework import serializers
from visual_image.models import Image

class ImageListSerializer(serializers.ModelSerializer):


    class Meta:
        model = Image
        fields = ['title']
