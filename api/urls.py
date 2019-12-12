from django.urls import path, include

from api.views import all_posts, current_user, UserList

urlpatterns = [
    path('all_posts/', all_posts, name='all_posts'),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
]
