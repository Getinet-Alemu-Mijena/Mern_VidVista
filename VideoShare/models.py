from django.db import models

class Account(models.Model):
    Id = models.AutoField(primary_key=True)
    First_Name = models.CharField(max_length=20)
    Last_Name = models.CharField(max_length=20)
    Email_Address = models.CharField(max_length=60)  # Change 'email' to 'Email_Address'
    Phone_Number = models.CharField(max_length=20)
    User_Name = models.CharField(max_length=20)

    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    AGE_CHOICES = [
        ('under18', 'Under 18'),
        ('18to30', '18 to 30'),
        ('31to50', '31 to 50'),
        ('over50', 'Over 50'),
    ]

    Gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    Age = models.CharField(max_length=20, choices=AGE_CHOICES, default='under18')
    Password = models.CharField(max_length=128)

    class Meta:
        db_table = 'account'
