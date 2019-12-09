from django.shortcuts import render
from django.shortcuts import redirect
from django.views.generic import CreateView, TemplateView

from django_currentuser.middleware import get_current_user

from post.models import Post
from post.forms import PostForm

# Create your views here.
class CreatePostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'posting/post_form.html'
    success_url = 'confirm'


class ConfirmPostView(TemplateView):
    template_name = 'posting/post_confirm.html'
