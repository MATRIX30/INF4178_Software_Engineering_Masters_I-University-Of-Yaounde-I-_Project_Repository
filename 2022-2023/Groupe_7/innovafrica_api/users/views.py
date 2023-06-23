from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet,  GenericViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate


from .models import User, Privilege, Profile, Entreprise, Project, Offer
from .serializers import (
    UserSerializerDisplay, UserSerializer,
    ProfileSerializer, ProfileSerializerDisplay,
    PrivilegeSerializer, EntrepriseSerializer, EntrepriseSerializerDisplay,
    ProjectSerializer, ProjectSerializerDisplay,
    OfferSerializer, OfferSerializerDisplay
)

import numpy as np
from pyanp import *

# Create your views here.

# ===================== USER ======================


class UserList(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserListDisplay(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = UserSerializerDisplay
    queryset = User.objects.all()

# ajouter un utilisateur


class AddUser(APIView):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# update un utilisateur


class UpdateUser(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def patch(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        serializer = UserSerializer(
            instance=user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        serializer = UserSerializer(user)
        if serializer.is_valif():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# supprimer un user


class DeleteUser(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def delete(self, request, pk):
        user = get_object_or_404(User, pk=pk)
        user.delete()
        return Response({"msg": "Utilisateur supprimé avec succés"}, status=status.HTTP_204_NO_CONTENT)

    def get(self, request):
        pass

# recupérer l'utilisateur connecté


class GetCurrentUser(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request):
        user_temp = request.user
        # serializer = UserSerializer(data=user.__dict__)
        user = UserSerializerDisplay(user_temp)
        token, created = Token.objects.get_or_create(user=user_temp)
        return Response({'token': token.key, 'currentuser': user.data}, status=status.HTTP_200_OK)

# login


class LoginView(APIView):
    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')
        logged_user = authenticate(username=username, password=password)
        if logged_user is not None:
            token, created = Token.objects.get_or_create(user=logged_user)
            user = UserSerializerDisplay(logged_user)
            return Response({'token': token.key, 'currentuser': user.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': "Email et/ou Mot de passe incorrect(s)"}, status=status.HTTP_404_NOT_FOUND)


# =================== PROFILE ================

class ProfileList(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class ProfileListDisplay(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = ProfileSerializerDisplay
    queryset = Profile.objects.all()


# class CreateProject(APIView):
#     def post(self, request, format=None):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         logged_user = authenticate(username=username, password=password)
#         if logged_user is not None:
#             token, created = Token.objects.get_or_create(user=logged_user)
#             user = UserSerializerDisplay(logged_user)
#             return Response({'token': token.key, 'currentuser': user.data}, status=status.HTTP_200_OK)
#         else:
#             return Response({'error': "Email et/ou Mot de passe incorrect(s)"}, status=status.HTTP_404_NOT_FOUND)


class AddProfile(APIView):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]

    def post(self, request):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# =================== PRIVILEGES ================


class PrivilegeList(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = PrivilegeSerializer
    queryset = Privilege.objects.all()


# =================== ENTREPRISE ================
class EntepriseList(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = EntrepriseSerializer
    queryset = Entreprise.objects.all()


class EntepriseListDisplay(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = EntrepriseSerializerDisplay
    queryset = Entreprise.objects.all()

# ==================== Project ==============


class ProjectList(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()


class ProjectListDisplay(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = ProjectSerializerDisplay
    queryset = Project.objects.all()


# ===================== Offer ======================

class OfferList(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()


class OfferListDisplay(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [TokenAuthentication]
    serializer_class = OfferSerializerDisplay
    queryset = Offer.objects.all()


class FindBEstProject(GenericViewSet):

    def AhpMethodeToFind(self):

        # Définir les critères et les alternatives
        criteria = ['Pertinence', 'Impact', 'Complexité']
        alternatives = self.get_project()

        # Générer des notes aléatoires pour chaque alternative et chaque critère
        np.random.seed(42)  # pour assurer la reproductibilité
        ratings = {
            alt: list(np.random.rand(len(criteria))) for alt in alternatives
        }

        # Afficher les notes pour chaque alternative et chaque critère
        for alt in alternatives:
            print(f"Notes pour {alt}: {ratings[alt]}")

        # Créer les matrices de comparaison des critères et des alternatives
        crit_matrix = np.array([
            [1.0,      1.0/3.0,  1.0/2.0],
            [3.0, 1.0,     1.0/5.0],
            [1.0/2.0, 1.0/5.0, 1.0]
        ])
        alt_matrices = []
        for i, crit in enumerate(criteria):
            alt_matrix = np.ones((len(alternatives), len(alternatives)))
            for j in range(len(alternatives)):
                for k in range(j+1, len(alternatives)):
                    if ratings[alternatives[j]][i] == ratings[alternatives[k]][i]:
                        alt_matrix[j, k] = alt_matrix[k, j] = 1
                    elif ratings[alternatives[j]][i] > ratings[alternatives[k]][i]:
                        alt_matrix[j, k] = 9
                        alt_matrix[k, j] = 1/9
                    else:
                        alt_matrix[j, k] = 1/9
                        alt_matrix[k, j] = 9
            alt_matrices.append(alt_matrix)

        # Calculer les pondérations et les scores globaux
        crit_weights = get_eigenvector(crit_matrix)
        alt_weights = []
        for alt_matrix in alt_matrices:
            alt_weights.append(get_eigenvector(alt_matrix))
        scores = np.dot(np.array(alt_weights).T, crit_weights)

        # Afficher les résultats triés par ordre décroissant de score
        results = sorted(zip(alternatives, scores),
                         key=lambda x: x[1], reverse=True)
        for result in results:
            print(f"{result[0]} : {result[1]}")
        pass

    def get_project():
        return Project.objects.all()
