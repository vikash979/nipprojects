from django.urls import re_path
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from socialSites import views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.urlpatterns import format_suffix_patterns
router = DefaultRouter()
#router.register(r'dit', views.parentViewViewset)
#router.register(r'users', views.UserViewSet)


urlpatterns = [

	re_path(r'^social_media/$', views.SocialMediaAPI.as_view(), name="social_media"),
	#re_path(r'^ackpolicy/$', views.acknowledgeViews.as_view(), name="ackpolicy"),
	#re_path(r'^ackpublication/$', views.acknowledgepublicationViews.as_view(), name="ackpublication"),

]
urlpatterns = format_suffix_patterns(urlpatterns)