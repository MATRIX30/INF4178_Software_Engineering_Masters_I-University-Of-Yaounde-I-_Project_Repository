from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

# Create your models here.


# edit django default user
class MyUserManager(BaseUserManager):
    def _create_user(self, username, password, **extra_fields):
        if not username:
            raise ValueError('The username(email) field must be provided')
        if not password:
            raise ValueError('The password field must be provided')
        username = self.normalize_email(username)
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, password, **extra_fields)

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, password, **extra_fields)

# provilege models


class Privilege(models.Model):
    label = models.CharField(max_length=100, unique=True)
    ref = models.CharField(max_length=20, blank=True)
    description = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return f'{self.label}'

# profile model


class Profile(models.Model):
    name = models.CharField(max_length=100, unique=True)
    ref = models.CharField(max_length=20, blank=True)
    description = models.TextField(max_length=500, blank=True)
    privileges = models.ManyToManyField(
        Privilege, blank=True, related_name="profiles")

    def __str__(self):
        return f'{self.ref}: {self.name}'

# a user of app (username, password are required)


class User(AbstractBaseUser, PermissionsMixin):
    # profile
    profile = models.ForeignKey(
        Profile, on_delete=models.SET_NULL, null=True, blank=True, related_name="user")

    username = models.EmailField(unique=True, max_length=100)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    gender = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(
        upload_to='profile_images', blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True)

    # specific to students
    level = models.CharField(max_length=100, blank=True, null=True)
    school = models.CharField(max_length=100, blank=True, null=True)
    document = models.FileField(
        upload_to='document_students', blank=True, null=True)
    document_description = models.TextField(
        max_length=500, blank=True, null=True)

    # specific to investors
    profession = models.CharField(max_length=100, blank=True, null=True)
    domain = models.CharField(max_length=100, blank=True, null=True)
    objective = models.TextField(max_length=500, blank=True, null=True)
    havEnt = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True, blank=True)
    date_updated = models.DateTimeField(auto_now=True, blank=True)

    objects = MyUserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'username'

    def __str__(self):
        return f'{self.username} [{self.profile}]'

# entreprise model


class Entreprise(models.Model):
    # director
    director = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True, related_name="entreprise")

    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    link = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(
        upload_to='entreprise_images', blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f'{self.name} [{self.director}]'

    class Meta:
        verbose_name_plural = "Entreprises"


# project model
class Project(models.Model):
    # student
    student = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, related_name="project")

    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    image = models.ImageField(
        upload_to='project_images', blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True, blank=True)
    date_updated = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return f'{self.title} [{self.student}]'

# offer model


class Offer(models.Model):
    # entreprise
    entreprise = models.ForeignKey(
        Entreprise, on_delete=models.SET_NULL, null=True, related_name="offer")

    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='offer_images', blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f'{self.title} [{self.entreprise}]'
