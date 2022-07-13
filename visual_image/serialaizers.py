from rest_framework import serializers
from .models import Image, Category
from star_ratings.models import Rating





class RatingObjectRelatedField(serializers.ModelSerializer):


    class Meta:
        model = Rating
        fields = ['count', 'average', 'total']





    def create(self, validated_data):
        return Rating.objects.create(**validated_data)



class ImagePostSerializer(serializers.ModelSerializer):
    image_id = serializers.ReadOnlyField(label='ID', read_only=True)
    author = serializers.CharField(max_length=100, read_only=True)
    title = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=100)
    category = serializers.SlugRelatedField(slug_field='name', queryset=Category.objects)
    cover = serializers.ImageField()
    ratings = RatingObjectRelatedField(many=True, read_only=True)


    class Meta:
        model = Image
        fields = ('image_id', 'author', 'title', 'description', 'category', 'cover', 'ratings')


    def create(self, validated_data):
        # Создание поста
        image = Image.objects.create(**validated_data)
        # Прикрепляем рейтинг к посту
        Rating.objects.create(content_type_id=8,object_id=image.image_id)

        return image


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
    ratings = RatingObjectRelatedField(many=True, read_only=True)
    class Meta:
        model = Image
        fields = "__all__"


    def get_image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.cover.url)


