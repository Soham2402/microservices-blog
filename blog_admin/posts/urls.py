from django.urls import path

from .views import PostViewSet,UserAPIView
urlpatterns = [
    path('post/', PostViewSet.as_view({
        'get':'list',
        'post':'create'
        })),
    
    path('post/<str:pk>',PostViewSet.as_view({
        'put':'update',
        'get':'retrieve',
        'delete':'destroy'
    })),
        path('users/', UserAPIView.as_view({
        'get':'list',
        }))
]
