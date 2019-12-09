from django.forms import ModelForm

from django_currentuser.middleware import get_current_user

from post.models import Post

class PostForm(ModelForm):

    def save(self, commit=True):
        self.instance.author = get_current_user()
        return super().save(commit)


    class Meta:
        model = Post
        fields = ['title', 'body']

