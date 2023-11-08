from django.db import models

# Create your models here.

class Account(models.Model):
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    phonenumber = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    )

    AGE_CHOICES = (
        ('under18', 'Under 18'),
        ('18to30', '18 to 30'),
        ('31to50', '31 to 50'),
        ('over50', 'Over 50'),
    )

    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    age = models.CharField(max_length=20, choices=AGE_CHOICES)
    Password = models.CharField(max_length=20)
    class Meta:
        db_table = 'account'
    
    