from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
     path('SignUp', views.SignUp, name='SignUp'),
     path('SignIn', views.SignIn, name='SignIn'),
     path('WatchVideo' ,views.WatchVideo, name='WatchVideo'),
     path('Account' ,views.Accounts, name='Account'),
]
