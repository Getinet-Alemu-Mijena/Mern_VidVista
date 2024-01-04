from django.contrib.auth import logout
from django.contrib.auth.hashers import make_password
from .models import Account
from .models import Video
from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.db.models import Q

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
    videos = Video.objects.all()

    # Pass the videos to the template
    return render(request, 'VideoShare/Home.html', {'videos': videos})

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
            request.session['user_id'] = user.Id
            return redirect('home')
        else:
            # Authentication failed, you might want to show an error message
            messages.error(request, 'Invalid username or password.')

    return render(request, 'VideoShare/SignIn.html')



def WatchVideo(request, video_id):
    # Retrieve the username from the session variable
    username = request.session.get('username')
    
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    else:
        videos = Video.objects.all()
        video = get_object_or_404(Video, pk=video_id)

        # Pass the videos and video to the template
        return render(request, 'VideoShare/WatchVideo.html', {'videos': videos, 'video': video})


def Accounts(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/Account.html')


def UploadVideo(request):
    user_id = request.session.get('user_id')
    owner = Account.objects.get(pk=user_id)
    
    if request.method == 'POST':
        video_file = request.FILES.get('video')
        title = request.POST.get('title')
        keywords = request.POST.get('Keywords')  # Correct the name to match the form field
        thumbnail = request.FILES.get('thumbnail')
        description = request.POST.get('description')
        category = request.POST.get('category')
        privacy = request.POST.get('privacy')
        recording_date = request.POST.get('recordingDate')
        license = request.POST.get('license')
        start_time = request.POST.get('start-time')

        # Check if 'title' is not empty before creating a new instance
        if title:
            video_instance = Video.objects.create(
                video=video_file,
                title=title,
                keywords=keywords,
                thumbnail=thumbnail,
                description=description,
                category=category,
                privacy=privacy,
                recording_date=recording_date,
                license=license,
                start_time=start_time,
                owner = owner
            )

            # Redirect to a success page
            return render(request, 'VideoShare/UploadSuccess.html')
        else:
            # Handle the case where 'title' is empty
            messages.error(request, 'Title cannot be empty.')

    return render(request, 'VideoShare/UploadVideo.html')

def SignUpSuccess(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/SignUpSuccess.html')
    
def UploadSuccess(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/UploadSuccess.html')

def SearchResult(request):
    # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view

    # Get the search query from the request
    search_query = request.GET.get('q')

    # Check if the search query is not empty
    if search_query:
        # Search for videos based on title, keywords, description, and category
        videos = Video.objects.filter(
            Q(title__icontains=search_query) |
            Q(keywords__icontains=search_query) |
            Q(description__icontains=search_query) |
            Q(category__icontains=search_query)
        )

        # Pass the search results to the template
        return render(request, 'VideoShare/SearchResult.html', {'videos': videos, 'search_query': search_query})
    else:
        # If the search query is empty, display a message or handle it as needed
        messages.info(request, 'Please enter a search query.')
        return redirect('home')  # Redirect to the home page or handle it differently
def VidVistaLive(request):
     # Retrieve the username from the session variable
    username = request.session.get('username')
    if not username:
        # Redirect to the login page
        return redirect('SignIn')  # Adjust 'login' to the actual name or URL of your login view
    return render(request, 'VideoShare/VidVistaLive.html')