from rest_framework import serializers
from rest_framework.exceptions import APIException
from .models import ChatMessage, Chat
from users.serializers import UserSerializer

class ChatMessageSerializer(serializers.ModelSerializer):
    recieved = serializers.SerializerMethodField('is_reciever')

    def is_reciever(self, obj):
        """
        Returns true if this chat message was recieved by the user getting the 
        messages.
        """
        try:
            #print('Request passed to context')
            user = self.context['request'].user
            return user != obj.sender
        except KeyError:
            #print('Request not passed to context')
            raise APIException()

    class Meta:
        model = ChatMessage
        fields = ('uuid', 'date_sent', 'message', 'recieved')


class ChatSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField('get_other_user')
    messages=ChatMessageSerializer(many=True,read_only=True)
    def get_other_user(self, obj):
        """
        Returns the other users model.
        """
        try:
            #print(self.context.get('request').user)
            if obj.user1_id == self.context['request'].user.id:
                return UserSerializer(obj.user2).data

            return UserSerializer(obj.user1).data
        except KeyError:
            #print('Request not passed to context chat')
            raise APIException()

    class Meta:
        model = Chat
        fields = ('uuid', 'date_created', 'user','messages',)
        read_only_fields = ('uuid', 'date_created', 'user',)