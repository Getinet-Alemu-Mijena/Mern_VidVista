from django.shortcuts import render
from .models import Account

def home(request):
    return render(request, 'VideoShare/Home.html')

def SignUp(request):
    if request.method == 'POST':
        if (
            request.POST.get('firstname') and
            request.POST.get('lastname') and
            request.POST.get('email') and
            request.POST.get('phonenumber') and
            request.POST.get('username') and
            request.POST.get('gender') and
            request.POST.get('age') and
            request.POST.get('password')
        ):
            saverecord = Account.objects.create(
                First_Name=request.POST.get('firstname'),
                Last_Name=request.POST.get('lastname'),
                Email_Address=request.POST.get('email'),
                Phone_Number=request.POST.get('phonenumber'),
                User_Name=request.POST.get('username'),
                Gender=request.POST.get('gender'),
                Age=request.POST.get('age'),
                Password=request.POST.get('password')
            )
            return render(request, 'VideoShare/SignUp.html')

    return render(request, 'VideoShare/SignUp.html')

def SignIn(request):
    return render(request, 'VideoShare/SignIn.html')

def WatchVideo(request):
    return render(request, 'VideoShare/WatchVideo.html')

def Accounts(request):
    return render(request, 'VideoShare/Account.html')
