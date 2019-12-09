from django.views import generic

# Create your views here.
class SignUpChoice(generic.TemplateView):
    # buttons specifying which account type to setup
    template_name = 'registration/signup_choice.html'
