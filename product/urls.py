from django.urls import path
from . import views

urlpatterns = [
    path('express-proxy/users', views.fetch_user_data, name='fetch_user_data'),
]