from django.urls import path
from . import views

urlpatterns = [
    path('',views.portfolio,name='portfolio'),
    path('customer_request',views.customer_request,name='customer_request'),
]