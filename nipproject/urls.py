"""indianNavy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from application import views as users_views
from acknowledge import views as subject_views
from socialSites import views as social_views
from django.conf import settings
from django.conf.urls.static import static
#from rest_framework.schemas.coreapi import AutoSchema


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('',users_views.EmptyView.as_view()),
    path('application/', include('application.urls')),
    # path('acknowledge/', include('acknowledge.urls')),
    # path('socialmedia/', include('socialSites.urls')),
    # path('othersiters/', include('othersites.urls')),
    # path('blogs/', include('blogs.urls')),

    ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
