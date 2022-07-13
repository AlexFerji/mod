from .models import Image
from visual_image.serialaizers import ImagePostSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status



class UploadImage(APIView):
    queryset = Image.objects.all()
    serializer_class = ImagePostSerializer
    model = Image


    def post(self, request):
        serializer_for_image = self.serializer_class(data=request.data)
        serializer_for_image.is_valid(raise_exception=True)
        if serializer_for_image.is_valid():
            serializer_for_image.save(user=request.user, author=request.user.first_name)
            return Response({"Success": "Изображение загружено"},status=status.HTTP_201_CREATED)
        return Response(serializer_for_image.errors, status=status.HTTP_400_BAD_REQUEST)

