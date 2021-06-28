from django.shortcuts import render
from rest_framework import viewsets
from django.views.generic import TemplateView
from .serializers import LabRatSerializer, ResearcherSerializer
from .models import LabRat, Researcher
# Create your views here.


class LabRatView(viewsets.ModelViewSet):
    serializer_class = LabRatSerializer
    queryset = LabRat.objects.all()


class ResearcherView(viewsets.ModelViewSet):
    serializer_class = ResearcherSerializer
    queryset = Researcher.objects.all()


class HomePageView(TemplateView):
    def get(self, request):
        context = {
            'labrat': LabRat.objects.all(),
            'researcher': Researcher.objects.all()
        }

        return render(request, 'index.html', context)

    def post(self, request):
        content = request.POST

        context = {
            'labrat': LabRat.objects.all(),
            'researcher': Researcher.objects.all()
        }

        return render(request, 'index.html', context)
