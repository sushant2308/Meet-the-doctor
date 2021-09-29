from django.db.models import Q
from rest_framework.decorators import api_view
from .models import Chat
from .serializers import ChatListSerializer, ChatSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from users.models import User 
from rest_framework import status

@api_view(['GET',])
def create_chat(request,slug):
    """
    Return chatid between two users if it exist or create new chat and return its chat id.
    """
    if request.user.is_authenticated:
        user1 = request.user
        user2 = get_object_or_404(User,id=slug)

        if(user1==user2):
            return Response({"error":"Cannot Start Chat with itself"},status=status.HTTP_403_FORBIDDEN)

        if(Chat.objects.filter(user1=user1,user2=user2).exists()):
            chat=Chat.objects.get(user1=user1,user2=user2)
            return Response({"chat_id":chat.uuid},status=status.HTTP_200_OK)

        chat= Chat.objects.create(user1=user1, user2=user2)

        return Response({"chat_id":chat.uuid},status=status.HTTP_201_CREATED)
    
    return Response({"message":"Please Login!"},status=status.HTTP_403_FORBIDDEN)


@api_view(['GET','POST',])
def delete_chat(request,slug):
    """
    Delete Chat with given chat id
    """
    chat= get_object_or_404(Chat,uuid=slug)
    chat.delete()
    return Response({"message":"Chat Successfully deleted"},status=status.HTTP_200_OK)


@api_view(['GET',])
def get_chat(request,slug):
    """
    Get chat with given id if it exists
    """
    if request.user.is_authenticated:
        chat= get_object_or_404(Chat,uuid=slug)
        serializer=ChatSerializer(chat,context={'request': request})
        return Response(serializer.data,status=status.HTTP_200_OK)

    return Response({"message":"Please Login!"},status=status.HTTP_403_FORBIDDEN)


@api_view(['GET',])
def get_userchatlist(request):
    """
    Retrieve all the Chats of the authenticated user
    """
    if request.user.is_authenticated:
        chat= Chat.objects.filter(Q(user1=request.user) | Q(user2=request.user))
        
        serializer=ChatListSerializer(chat,context={'request': request},many=True)
        return Response(serializer.data)

    return Response({"message":"Please Login!"},status=status.HTTP_403_FORBIDDEN)

