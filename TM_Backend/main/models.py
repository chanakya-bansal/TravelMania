from django.db import models

# Create your models here.

class USER_INFO(models.Model):
    User_name=models.CharField(max_length=100)
    Password=models.CharField(max_length=100)
    Email=models.CharField()
    is_Premium=models.BooleanField(default=False)
    SignUp_Date=models.DateTimeField(auto_now_add=True)