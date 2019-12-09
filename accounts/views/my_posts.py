from django.views import generic
from post.models import Post
from django_getcurrentuser.middleware import get_current_user

# Create your views here.
class MyPosts(generic.ListView):
    # buttons specifying which account type to setup
    model = Post
    current_user = get_current_user()
    queryset = self.model.objects.filter(author=current_user)
