from django.urls import path

from .views import CreatePostView, ConfirmPostView, MyPosts


urlpatterns = [
    path('my_posts', MyPosts.as_view(), name='my_posts'),
    path('create', CreatePostView.as_view(), name='create_post'),
    path('confirm', ConfirmPostView.as_view(), name='confirm_post'),
]
