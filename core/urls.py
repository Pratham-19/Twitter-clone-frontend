from . import views 
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.main),
    path('signup', TemplateView.as_view(template_name='index.html')),
    # path('signup', views.signup,name='signup'),
]