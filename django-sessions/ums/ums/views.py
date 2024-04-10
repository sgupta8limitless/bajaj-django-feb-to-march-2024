from django.http import HttpResponse
from django.shortcuts import render


def basicEndpoint(request):
    return HttpResponse("Endpoint working")


def detailEndpoint(request,id):
    print(id)
    return HttpResponse("Details Endpoint working")

def sendPage(request):
    return render(request,"demo.html")


