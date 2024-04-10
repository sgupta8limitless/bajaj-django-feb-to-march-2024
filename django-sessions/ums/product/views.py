from rest_framework.decorators import api_view
from .models import Product
from rest_framework.response import Response
from .serializers import ProductSerializer
from rest_framework import status

# Create your views here.

@api_view(["get"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response({"message":"All Products","data":serializer.data})

@api_view(["get"])
def getSingleProduct(request,id):
    product = Product.objects.filter(id=id)
    serializer = ProductSerializer(product,many=True)
    return Response({"message":"Single","data":serializer.data})



@api_view(["post"])
def createProduct(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Product Created","data":serializer.data,"status":status.HTTP_201_CREATED})
    
    return Response({"message":"Some Problem","status":status.HTTP_400_BAD_REQUEST})


    

   
