from django.shortcuts import render
from .models import Account

def home(request):
    return render(request, 'VideoShare/Home.html')

def SignUp(request):
    if request.method == 'POST':
        if request.POST.get('firstname') and request.POST.get('lastname') and request.POST.get('email') and request.POST.get('phonenumber') and request.POST.get('username') and request.POST.get('gender') and request.POST.get('age') and request.POST.get('password'):
            saverecord = Account()
            saverecord.firstname = request.POST.get('firstname')
            saverecord.lastname = request.POST.get('lastname')
            saverecord.email = request.POST.get('email')
            saverecord.phonenumber = request.POST.get('phonenumber')
            saverecord.username = request.POST.get('username')
            saverecord.gender = request.POST.get('gender')
            saverecord.age = request.POST.get('age')
            saverecord.password = request.POST.get('password')
            saverecord.save()
    
    
    return render(request, 'VideoShare/SignUp.html')

def SignIn(request):
    return render(request, 'VideoShare/SignIn.html')
def WatchVideo(request):
    return render(request, 'VideoShare/WatchVideo.html')
def Account(request):
    return render(request, 'VideoShare/Account.html')