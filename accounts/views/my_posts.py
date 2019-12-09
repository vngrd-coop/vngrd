from django.views import generic
from post.models import Post

# Create your views here.
class MyPosts(generic.ListView):
    # get the current user from request & filter on that
    model = Post
    template_name = 'posting/my_posts.html'

    def get(self, request, *args, **kwargs):
        current_user = request.user
        self.queryset = self.model.objects.filter(author=current_user)
        return super().get(request, *args, **kwargs)
