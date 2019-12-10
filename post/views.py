from django.views.generic import CreateView, TemplateView, ListView

from post.models import Post
from post.forms import PostForm

# Create your views here.
class CreatePostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'posting/post_form.html'
    success_url = 'confirm'

    def form_valid(self, form):
        # auto populate author field
        form.instance.author = self.request.user
        return super().form_valid(form)

class MyPosts(ListView):
    model = Post
    template_name = 'posting/my_posts.html'

    def get(self, request, *args, **kwargs):
        current_user = request.user
        self.queryset = self.model.objects.filter(author=current_user)
        return super().get(request, *args, **kwargs)


#class CommentView(CreateView):
#    model = Comment



class ConfirmPostView(TemplateView):
    template_name = 'posting/post_confirm.html'
