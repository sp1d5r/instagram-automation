from django.contrib import admin
from .models import LabRat, Researcher
# Register your models here.


class LabRatAdmin(admin.ModelAdmin):
    list_display = ['username', 'interactions', 'followers', 'following', 'bio_length']


class ResearcherAdmin(admin.ModelAdmin):
    list_display = ['username', 'caught_rats', 'escaped_rats', 'processing_rats']


admin.site.register(LabRat, LabRatAdmin)
admin.site.register(Researcher, ResearcherAdmin)