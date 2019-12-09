from django.contrib.auth import login, get_user_model
from django.shortcuts import redirect
from django.views.generic import CreateView

from ..forms import CreatorSignUpForm
from ..models import Creator

class SignUpCreatorView(CreateView):
    model = get_user_model()
    form_class = CreatorSignUpForm
    template_name = 'registration/signup_form.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'creator'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('home')
