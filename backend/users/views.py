from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer,SigInSerializer
from .models import User
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
)
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""
    serializer_class = UserSerializer

@api_view(['GET', ])
def speciality_doctors(request,slug):
    doctors = User.objects.filter(is_doctor=True,speciality=slug)
    serializer = UserSerializer(doctors,many=True) 
    return Response(serializer.data,status=HTTP_200_OK)       

@api_view(["POST"])
def signin(request):
    signin_serializer = SigInSerializer(data = request.data)
    if not signin_serializer.is_valid():
        return Response(signin_serializer.errors, status = HTTP_400_BAD_REQUEST)


    user = authenticate(
            request=request,
            username = request.data['email'],
            password = request.data['password'] 
        )
    if not user:
        return Response({'detail': 'Invalid Credentials or activate account'}, status=HTTP_404_NOT_FOUND)
        
    #TOKEN STUFF
    user.status=1
    user.save()
    token, _ = Token.objects.get_or_create(user = user)
    user_serialized = UserSerializer(user)

    return Response({
        'user': user_serialized.data, 
        'token': token.key
    }, status=HTTP_200_OK)


@api_view(['GET', ])
def logout(request):
    user=request.user
    print(user.status)
    user.status=0
    
    user.save()
    return Response({"message":"Successfully logged out"},status=HTTP_200_OK)       