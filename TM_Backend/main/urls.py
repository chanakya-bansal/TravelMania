from . import views
from django.urls import path

urlpatterns = [
    path("SignUp", views.SignUp, name="Signup")
]