from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    name= models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50,unique=True)
    password = models.CharField(max_length=100)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []