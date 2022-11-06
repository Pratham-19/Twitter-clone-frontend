from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def main(request):
    return HttpResponse("<h1>It's alive!</h1>")
def signup(request):
    return render(request, 'signup.html')