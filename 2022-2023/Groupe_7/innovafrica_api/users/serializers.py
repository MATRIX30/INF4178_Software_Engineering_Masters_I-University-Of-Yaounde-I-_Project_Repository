from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.hashers import make_password
from .models import User, Profile, Privilege, Project, Offer, Entreprise


# privilige serializer
class PrivilegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Privilege
        fields = ['id', 'label', 'ref', 'description']

    def create(self, validated_data):
        label = validated_data["label"]
        ref = ""
        ref_tab = label.split("_")
        for r in ref_tab:
            ref += r[0].upper()
        validated_data["ref"] = ref
        return super().create(validated_data)

# profile serializer


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'name', 'ref', 'description', 'privileges']

    def create(self, validated_data):
        name = validated_data["name"]
        ref = ""
        ref_tab = name.split("_")
        if len(ref_tab) > 1:
            for r in ref_tab:
                ref += r[0].upper()
        else:
            ref = name[0].upper()+name[1].lower()
        validated_data["ref"] = ref
        return super().create(validated_data)

# profile display serializer


class ProfileSerializerDisplay(serializers.ModelSerializer):
    privileges = PrivilegeSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['id', 'name', 'ref', 'description', 'privileges']

    def create(self, validated_data):
        name = validated_data["name"]
        ref = ""
        ref_tab = name.split("_")
        if len(ref_tab) > 1:
            for r in ref_tab:
                ref += r[0].upper()
        else:
            ref = name[0].upper()+name[1].lower()
        validated_data["ref"] = ref
        return super().create(validated_data)

# user serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        user = super().create(validated_data)
        Token.objects.create(user=user)
        return user

# user display serializer


class UserSerializerDisplay(serializers.ModelSerializer):
    profile = ProfileSerializerDisplay(read_only=True)

    class Meta:
        model = User
        fields = ('__all__')

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        user = super().create(validated_data)
        Token.objects.create(user=user)
        return user

# entreprise serializer


class EntrepriseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entreprise
        fields = ['id', 'name', 'location',
                  'email', 'link', 'image', 'director']
# entreprise display serializer


class EntrepriseSerializerDisplay(serializers.ModelSerializer):
    director = UserSerializerDisplay(read_only=True)

    class Meta:
        model = Entreprise
        fields = ['id', 'name', 'location',
                  'email', 'link', 'image', 'director']

# projects serializer


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'category', 'image', 'description',
                  'date_created', 'date_updated', 'student']
# projects display serializer


class ProjectSerializerDisplay(serializers.ModelSerializer):
    student = UserSerializerDisplay(read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'category', 'image', 'description',
                  'date_created', 'date_updated', 'student']

# offer serializer


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ['id', 'title', 'image', 'entreprise']
# offer display serializer


class OfferSerializerDisplay(serializers.ModelSerializer):
    entreprise = EntrepriseSerializerDisplay(read_only=True)

    class Meta:
        model = Offer
        fields = ['id', 'title', 'image', 'entreprise']
