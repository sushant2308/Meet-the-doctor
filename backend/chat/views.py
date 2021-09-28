from rest_framework.generics import ListAPIView, ListCreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.db.models import Q
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import ChatMessage, Chat
from .serializers import ChatListSerializer, ChatSerializer
from .permissions import HasChatPermissions
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from users.models import User 

@api_view(['GET',])
def create_chat(request,slug):
    """
    Return chatid between two users if it exist or create new chat and return its chat id.
    """
    user1 = request.user
    user2 = get_object_or_404(User,id=slug)

    if(Chat.objects.filter(user1=user1,user2=user2).exists()):
        chat=Chat.objects.get(user1=user1,user2=user2)
        return Response({"chat_id":chat.uuid})

    chat= Chat.objects.create(user1=user1, user2=user2)

    return Response({"chat_id":chat.uuid})
    

@api_view(['GET','POST',])
def delete_chat(request,slug):
    """
    Delete Chat with given chat id
    """
    chat= Chat.objects.get(uuid=slug)
    chat.delete()
    return Response({"message":"Chat Successfully deleted"})


@api_view(['GET',])
def get_chat(request,slug):
    """
    Get chat with given id if it exists
    """

    chat= get_object_or_404(Chat,uuid=slug)
    serializer=ChatSerializer(chat,context={'request': request})
    return Response(serializer.data)


@api_view(['GET',])
def get_userchatlist(request):
    """
    Retrieve all the Chats of the authenticated user
    """
    print(request.user)
    chat= Chat.objects.filter(Q(user1=request.user) | Q(user2=request.user))
    
    serializer=ChatListSerializer(chat,context={'request': request},many=True)
    #print(serializer.data)
    return Response(serializer.data)

