from django.urls import path
from django.conf import settings
from . import views
from django.conf.urls.static import static

app_name = 'users'

urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='register'),
    path('login/', views.signin, name='login'),
    path('logout/',views.logout,name='logout'),
    path('speciality/<slug:slug>/',views.speciality_doctors,name='speciality'),#checked
]