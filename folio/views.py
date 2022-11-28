from django.shortcuts import render,redirect
from . models import *

# Create your views here.
def portfolio(request):
    return render(request,'folio.html')

def customer_request(request):
    if request.method=='POST':
        name = request.POST["name"]
        email = request.POST["email"]
        subject = request.POST["subject"]
        message = request.POST["message"]
        try:
            data=Request.objects.create(name=name,email=email,subject=subject,message=message)
            
        except:
            print('There is some issues!')
    return redirect('portfolio')   

def download_cv(request):
    print ("download_cv : >>>>> ", request)
    pass