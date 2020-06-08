from django.db import models
from django.conf import settings
from .models import socialmedia_menu
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
#from users.models import CustomUser
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.conf import settings
from application.views import BasicPagination
from rest_framework.pagination import PageNumberPagination 
from application.views import PaginationHandlerMixin
from django.http import Http404,HttpResponse
from rest_framework import status
from . import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic import TemplateView , View
from django.shortcuts import render, redirect

pagination_ob = settings.PAGINATION_SIZE



class SocialMediaAPI(APIView):
 	def get_object(self):
 		try:
 			return socialmedia_menu.objects.all()
 		except socialmedia_menu.DoesNotExist:
 			return Http404

 	def get(self, request,  format=None):
 		ack_menu = self.get_object()
 		serializer = serializers.SocialMediaSerializer(ack_menu,many=True)
 		return Response(serializer.data)



class socialViews(TemplateView):
	template_name = "acknowledge/policy.html"
	def get(self, request, id=None):
		context_data = {}
		policy_obj = socialmedia_menu.objects.all().values().order_by("-id")
		paginator = Paginator(policy_obj,pagination_ob)
		if request.GET.get('page')==None:
			page =1
		else:
			page = int(request.GET.get('page'))
		try:
			users = paginator.page(page)
		except PageNotAnInteger :
			users = paginator.page(1)
		except EmptyPage:
			users = paginator.page(paginator.num_pages)

		
		context_data['policy'] = users
		program_numpages = paginator.num_pages
		program_numpages = program_numpages+1
		context_data['PAGINATION_COUNT'] = range(1,program_numpages)
		

		return render(request, self.template_name, context_data)