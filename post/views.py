from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import CreateView, TemplateView

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


class ConfirmPostView(TemplateView):
    template_name = 'posting/post_confirm.html'
