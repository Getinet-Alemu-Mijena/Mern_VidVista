from django.contrib.auth import logout
from django.contrib.auth.hashers import make_password
from .models import Account
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.hashers import check_password

def home(request):
    if request.method == 'POST' and 'sign_out' in request.POST:
        # Clear the session and log the user out
        logout(request)
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view

    # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view

    # Now you can use the 'username' variable in your template or any other logic
    return render(request, 'VideoShare/Home.html', {'username': username})

def SignUp(request):
    if request.method == 'POST':
        # Extract form data
        first_name = request.POST.get('firstname')
        last_name = request.POST.get('lastname')
        email = request.POST.get('email')
        phone_number = request.POST.get('phonenumber')
        username = request.POST.get('username')
        gender = request.POST.get('gender')
        age = request.POST.get('age')
        raw_password = request.POST.get('password')

        # Check if user with the same email or username already exists
        if Account.objects.filter(Email_Address=email).exists() or Account.objects.filter(User_Name=username).exists():
            messages.error(request, 'User with this email or username already exists.')
            return redirect('SignUp')

        # Hash the password
        hashed_password = make_password(raw_password)

        # If the user does not exist, create a new user with hashed password
        saverecord = Account.objects.create(
            First_Name=first_name,
            Last_Name=last_name,
            Email_Address=email,
            Phone_Number=phone_number,
            User_Name=username,
            Gender=gender,
            Age=age,
            Password=hashed_password  # Save the hashed password
        )

        # Redirect to a success page or login page
        return render(request, 'VideoShare/SignUpSuccess.html')

    return render(request, 'VideoShare/SignUp.html')


def SignIn(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if a user with the given username exists
        user = Account.objects.filter(User_Name=username).first()

        # Check if the user exists and the password is correct
        if user and check_password(password, user.Password):
            
            request.session['username'] = username
            # Authentication successful, redirect to home
            return redirect('home')
        else:
            # Authentication failed, you might want to show an error message
            messages.error(request, 'Invalid username or password.')

    return render(request, 'VideoShare/SignIn.html')



def WatchVideo(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/WatchVideo.html')

def Accounts(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/Account.html')

def UploadVideo(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/UploadVideo.html')

def SignUpSuccess(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/SignUpSuccess.html')
    
    