from django.urls import path
from .views import VidVistaLive, home, SignUp, SignIn, WatchVideo, Accounts, UploadVideo, SignUpSuccess, UploadSuccess, SearchResult
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('Home', home, name='home'),
    path('SignUp', SignUp, name='SignUp'),
    path('', SignIn, name='SignIn'),
    path('WatchVideo/<int:video_id>/', WatchVideo, name='watch_video'),
    path('Account', Accounts, name='Account'),
    path('UploadVideo', UploadVideo, name='UploadVideo'),
    path('SignUpSuccess', SignUpSuccess, name='SignUpSuccess'),
    path('UploadSuccess', UploadSuccess, name='UploadSuccess'),
    # path('SearchResult', SearchResult, name='SearchResult'),
    path('search/', SearchResult, name='search_result'),
    path('VidVistaLive',VidVistaLive,name='VidVistaLive'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
