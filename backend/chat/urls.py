from django.urls import path

from . import views

app_name = 'chat'
urlpatterns = [
    path('get_chat/<slug:slug>/', views.get_chat),
    path('create_chat/<slug:slug>/', views.create_chat),
    path('delete_chat/<slug:slug>/', views.delete_chat),
    path('user_chatlist/', views.get_userchatlist),
]
