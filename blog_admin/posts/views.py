from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializer import PostSerializer,UserSerializer

from .models import Post, User

class PostViewSet(viewsets.ViewSet):
    def list(self, request):
        try:
            posts = Post.objects.all()
            serialized = PostSerializer(posts, many = True)
            return Response(data = serialized.data, status = status.HTTP_204_NO_CONTENT)
        except:
            return Response(status = status.HTTP_404_NOT_FOUND)    
        
        
    def create(self, request):
        deserialized = PostSerializer(data=request.data)
        if deserialized.is_valid():
            deserialized.save()
            return Response(data = deserialized.data, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
    
    def retrieve(self, request, pk=None):
        try:
            post = Post.objects.get(id = pk)
            serialized = PostSerializer(post)
            return Response(data = serialized.data)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

    
    def destroy(self,request,pk = None):
        try:
            post = Post.objects.get(id = pk)
            post.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def update(self,request,pk=None):
        try:
            post = Post.objects.get(id = pk)
            serialized = PostSerializer(instance=post, data=request.data)
            if serialized.is_valid():
                serialized.save()
                return Response(data = serialized.data, status=status.HTTP_202_ACCEPTED)
            else:
                return Response(status=status.HTTP_304_NOT_MODIFIED)
                
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        

class UserAPIView(viewsets.ViewSet):
    def list(self,request):
        user = User.objects.all()
        serialized = UserSerializer(user, many = True)
        return Response(data = serialized.data, status=status.HTTP_302_FOUND)