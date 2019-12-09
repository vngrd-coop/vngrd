from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class CustomUser(AbstractUser):
    is_consumer = models.BooleanField('Consumer status', default=False)
    is_creator = models.BooleanField('Creator status', default=False)
    
    def __str__(self):
        return self.username

class Creator(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)

class Consumer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
