from django.urls import path, include

from accounts.views import util, creator, consumer


urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('signup/', util.SignUpChoice.as_view(), name='signup'),
    path('signup/creator/', creator.SignUpCreatorView.as_view(), name='creator_signup'),
    path('signup/consumer/', consumer.SignUpConsumerView.as_view(), name='consumer_signup'),
]
