from django.db import models
from accounts.models import CustomUser

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, unique=True)
    body = models.TextField()
    time_published = models.DateField(db_index=True, auto_now_add=True)

    def __str__(self):
        return self.title
