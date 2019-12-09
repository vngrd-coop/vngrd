from django.urls import path, include

from accounts.views import util, creator, consumer, my_posts


urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('my_posts/', my_posts.MyPosts.as_view(), name='my_posts'),
    path('signup/', util.SignUpChoice.as_view(), name='signup'),
    path('signup/creator/', creator.SignUpCreatorView.as_view(), name='creator_signup'),
    path('signup/consumer/', consumer.SignUpConsumerView.as_view(), name='consumer_signup'),
]
