from django.urls import path, include

from .views import CreatePostView, ConfirmPostView


urlpatterns = [
    path('create', CreatePostView.as_view(), name='create_post'),
    path('confirm', ConfirmPostView.as_view(), name='confirm_post'),
]
