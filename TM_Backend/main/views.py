
import json
from django.http import JsonResponse 
from django.views.decorators.csrf import csrf_exempt
from .models import USER_INFO
# Create your views here.

@csrf_exempt
def SignUp(request):
    if request.method=="POST":
        data=json.loads(request.body)
        Username=data.get("username")
        Password=data.get("password")
        Email=data.get("email")
        Is_Premium=data.get("isPremium")
        if(Is_Premium=="on"):
            Is_Premium=True
        else:
            Is_Premium=False

        data=USER_INFO.objects.create(User_name=Username, Password=Password, Email=Email, is_Premium=Is_Premium)   
        data.save()

    return JsonResponse({"message": "USER REGISTERED!!"})
