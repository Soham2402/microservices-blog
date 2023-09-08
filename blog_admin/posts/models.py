from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=289, null=False)
    image = models.CharField(max_length=289)
    likes = models.PositiveIntegerField(default=0)
    
class User(models.Model):
    pass