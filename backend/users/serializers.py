from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.utils.translation import ugettext_lazy as _



class UserSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""
    class Meta:
        model = get_user_model()
        fields = ('id','email', 'password', 'name','phone_no','address','is_doctor','status','speciality',)
        read_only_fields = ('id',)
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user

class SigInSerializer(serializers.Serializer):
    email = serializers.CharField(required = True)
    password = serializers.CharField(required = True)
