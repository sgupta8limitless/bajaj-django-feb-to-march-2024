from django.db import models

# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=50)
    price=models.IntegerField()
    imageurl=models.TextField()
    description=models.TextField()
    created_at=models.DateTimeField(auto_now=True)


