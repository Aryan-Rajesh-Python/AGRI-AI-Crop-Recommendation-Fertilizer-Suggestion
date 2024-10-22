from django.contrib import admin

from django.urls import path
from .views import hello, upload_image

urlpatterns = [
    path("", hello, name="hello"),
    path("upload/", upload_image, name="upload_image"),
    # Add other URL patterns as needed
]
