from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import get_object_or_404, render
import requests


def fetch_user_data(request):
    proxy_url = "http://localhost:8001/proxy"
    payload = {
        "action": "fetch_users",
    }
    response = requests.post(proxy_url, json=payload)

    if response.status_code == 200:
        user_data = response.json()
        return JsonResponse(user_data, safe=False)
    else:
        return JsonResponse({"error": "Failed to fetch user data"}, status=500)
