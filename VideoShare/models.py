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

class Video(models.Model):
    video = models.FileField(upload_to='videos/')
    title = models.CharField(max_length=255)
    keywords = models.TextField()
    thumbnail = models.ImageField(upload_to='thumbnails/')
    description = models.TextField()
    category = models.CharField(max_length=100, choices=[
        ('music', 'Music'),
        ('gaming', 'Gaming'),
        ('travel', 'Travel'),
        # Add more categories as needed
    ])
    privacy = models.CharField(max_length=50, choices=[
        ('public', 'Public'),
        ('private', 'Private'),
        # Add more options as needed
    ])
    recording_date = models.DateField()
    license = models.CharField(max_length=50, choices=[
        ('all-rights-reserved', 'All Rights Reserved'),
        ('cc-by', 'Creative Commons - Attribution'),
        ('cc-by-sa', 'Creative Commons - Attribution-ShareAlike'),
        ('public-domain', 'Public Domain'),
        ('cc-by-nc', 'Creative Commons - Attribution-NonCommercial'),
        ('cc-by-nc-sa', 'Creative Commons - Attribution-NonCommercial-ShareAlike'),
        ('cc-by-nd', 'Creative Commons - Attribution-NoDerivs'),
        # Add more options as needed
    ])
    start_time = models.DateTimeField(null=True, blank=True)
    owner = models.ForeignKey(Account, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.title