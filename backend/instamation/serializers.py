from rest_framework import serializers
from .models import LabRat, Researcher


class LabRatSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabRat
        fields = ('username', 'interactions', 'followers', 'following', 'bio_length')


class ResearcherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Researcher
        fields = ('username', 'caught_rats', 'escaped_rats', 'processing_rats')
