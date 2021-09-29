from django.urls import path

from . import views

app_name = 'chat'
urlpatterns = [
    path('get_chat/<slug:slug>/', views.get_chat,name="getChats"),
    path('create_chat/<slug:slug>/', views.create_chat,name="createChats"),
    path('delete_chat/<slug:slug>/', views.delete_chat,name="deleteChats"),
    path('user_chatlist/', views.get_userchatlist,name="getChatList"),
]
