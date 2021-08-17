from django.urls import path
from django.conf import settings
from . import views
from django.conf.urls.static import static

app_name = 'users'

urlpatterns = [
    path('create/', views.CreateUserView.as_view(), name='create'),#checked
    path('token/', views.CreateTokenView.as_view(), name='token'),#checked
    path('me/', views.ManageUserView.as_view(), name='me'),#checked
    path('speciality/<slug:slug>/',views.speciality_doctors,name='speciality'),#checked
]