from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status
from .models import User
import jwt,datetime

@api_view(['post'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message":"User Registered",
            "data":serializer.data,
            "status":status.HTTP_201_CREATED
            },status=status.HTTP_201_CREATED)
    
    return Response({
            "message":"Unable To Register",
            "data":serializer.error_messages,
            "status":status.HTTP_400_BAD_REQUEST
            })


@api_view(['post'])
def login(request):
    email = request.data['email']
    password = request.data['password']

    user = User.objects.filter(email=email).first()
    if user is None:
        return Response({"message":"User Doesnt Exist"})
    
    if not user.check_password(password):
        return Response({"message":"Incorrect Password"})
    
    payload = {
        "id":user.id,
        # "iat":datetime.datetime.now(),
        "exp":datetime.datetime.now() + datetime.timedelta(minutes=60)
    }

    token = jwt.encode(payload,"secret",algorithm="HS256")
    

    return Response({"message":"Successfull","token":token})


@api_view(['get'])
def getFoodItems(request):
    print("in between")
    return Response({"message":"secured Endpoint"})
    



