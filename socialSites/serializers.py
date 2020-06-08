from rest_framework import serializers
from .models import socialmedia_menu

class  SocialMediaSerializer(serializers.ModelSerializer):
	class Meta:
		model = socialmedia_menu
		fields = '__all__'