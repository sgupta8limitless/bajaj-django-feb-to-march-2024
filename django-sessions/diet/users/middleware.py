from typing import Any
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
import jwt
from .models import User

class TokenMiddleware:
    def __init__(self,get_response):
        self.get_response = get_response

    def __call__(self, request):

        if(request.path=="/api/v1/users/login/" or request.path=="/api/v1/users/register/"):

            response = self.get_response(request)
            return response

        else:

            authHeader = request.headers.get("Authorization")

            if(authHeader is not None ):

                token = authHeader.split(" ")[1]
                payload = jwt.decode(token,"secret",algorithms=["HS256"])
                user = User.objects.filter(id=payload["id"]).first()
                if user is not None:
                    response = self.get_response(request)
                    return response
                else:
                    response = Response({
                    "message":"Invalid Token"
                    })
                    response.accepted_renderer = JSONRenderer()
                    response.accepted_media_type = "application/json"
                    response.renderer_context = {}
                    response.render()
                    return response

            else:
                
                response = Response({
                    "message":"Please Provide a Token"
                })
                response.accepted_renderer = JSONRenderer()
                response.accepted_media_type = "application/json"
                response.renderer_context = {}
                response.render()

        
        return response

        
        