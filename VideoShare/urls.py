from django.urls import path
from . import views

urlpatterns = [
    path('Home', views.home, name='home'),
     path('SignUp', views.SignUp, name='SignUp'),
     path('', views.SignIn, name='SignIn'),
     path('WatchVideo' ,views.WatchVideo, name='WatchVideo'),
     path('Account' ,views.Accounts, name='Account'),
     path('UploadVideo' ,views.UploadVideo, name='UploadVideo'),
     path('SignUpSuccess',views.SignUpSuccess, name='SignUpSuccess'),
]
