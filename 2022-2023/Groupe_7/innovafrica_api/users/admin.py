from django.contrib import admin
from .models import Privilege, Profile, User, Entreprise, Project, Offer

# Register your models here.

admin.site.register(Privilege)
admin.site.register(Profile)
admin.site.register(User)
admin.site.register(Entreprise)
admin.site.register(Project)
admin.site.register(Offer)
