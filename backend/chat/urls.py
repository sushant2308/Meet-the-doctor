from django.urls import path

from . import views

app_name = 'chat'
urlpatterns = [
    path('get_chatlist/<slug:slug>/', views.get_chatlist),
    path('create_chatlist/<slug:slug>/', views.create_chatlist),
    path('delete_chatlist/<slug:slug>/', views.delete_chatlist)
]
