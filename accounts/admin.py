from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserSignUpForm, CustomUserChangeForm
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserSignUpForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [
        'username',
        'email',
        'is_consumer',
        'is_creator',
    ]

# Register your models here.
admin.site.register(CustomUser, CustomUserAdmin)
