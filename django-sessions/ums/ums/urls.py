from django.contrib import admin
from django.urls import path
from .views import *
from django.conf.urls import include

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path("demo/",basicEndpoint),
    # path("demo/<int:id>/",detailEndpoint),
    # path("page/",sendPage),
    path("api/v1/products/",include("product.urls"))
   
]
