from django.urls import path, include

from api.views import all_posts

urlpatterns = [
    path('all_posts/', all_posts, name='all_posts'),
]
