from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LabRatSerializer, ResearcherSerializer
from .models import LabRat, Researcher
# Create your views here.


class LabRatView(viewsets.ModelViewSet):
    serializer_class = LabRatSerializer
    queryset = LabRat.objects.all()


class ResearcherView(viewsets.ModelViewSet):
    serializer_class = ResearcherSerializer
    queryset = Researcher.objects.all()