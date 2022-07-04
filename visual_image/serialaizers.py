from rest_framework import serializers
from rest_framework.validators import  UniqueTogetherValidator

from .models import Image, Category

from star_ratings.models import Rating
from generic_relations.relations import GenericRelatedField



class RatingObjectRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        if isinstance(value, Image):
            serializer = ImagePostSerializer(value)
        else:
            raise Exception('Unexpected type of tagged object')

        return serializer.data


class ImagePostSerializer(serializers.Serializer):
    author = serializers.CharField(max_length=100)
    title = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=100)
    category = serializers.SlugRelatedField(slug_field='name', queryset=Category.objects)
    cover = serializers.ImageField()
    #ratings = RatingObjectRelatedField(many=True, queryset=Rating.objects.all())

    class Meta:
        model = Image
        fields = ('ratings')



    def create(self, validated_data):
        return Image.objects.create(**validated_data)


    # class Meta:
    #     validators = [
    #         UniqueTogetherValidator(
    #             queryset=Image.objects.all(),
    #             fields=['title'],
    #             message='Изображение с такиим именем уже существует'
    #         )
    #     ]



class ImageSerializer(serializers.ModelSerializer):
    author = serializers.CharField(max_length=40)
    title = serializers.CharField(max_length=40)
    description = serializers.CharField(max_length=150)
    cover = serializers.ImageField(max_length=None, allow_empty_file=False, use_url=True)
    category = serializers.ReadOnlyField(source='category.name')
    user = serializers.EmailField()
    ratings = RatingObjectRelatedField(many=True, queryset=Rating.objects.all())

    class Meta:
        model = Image
        fields = "__all__"


    def get_image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.cover.url)


