from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth import get_user_model
from django.db import transaction

from accounts.models import CustomUser, Creator, Consumer


class CustomUserSignUpForm(UserCreationForm):

    class Meta:
        model = get_user_model()
        fields = ('is_consumer', 'is_creator')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = get_user_model()
        fields = ('is_consumer', 'is_creator')


class CreatorSignUpForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ('username', 'email')

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_creator = True
        user.save()
        creator = Creator.objects.create(user=user)
        return user


class ConsumerSignUpForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ('username', 'email')

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_consumer = True
        user.save()
        consumer = Consumer.objects.create(user=user)
        return user
