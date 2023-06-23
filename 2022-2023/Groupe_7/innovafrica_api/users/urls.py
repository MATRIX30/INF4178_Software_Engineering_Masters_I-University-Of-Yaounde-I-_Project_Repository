from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

from .views import (
    # user
    UserList, UserListDisplay, AddUser, UpdateUser, GetCurrentUser, DeleteUser, LoginView,

    # enterprise
    EntepriseList, EntepriseListDisplay,

    # profile
    ProfileList, ProfileListDisplay, AddProfile,

    # privilege
    PrivilegeList,

    # project
    ProjectList, ProjectListDisplay,

    # offre
    OfferList, OfferListDisplay

)

router = DefaultRouter()
router.register(r'users', UserList, basename='users')
router.register(r'users-display', UserListDisplay, basename='users-display')

router.register(r'enterprises', EntepriseList, basename='enterprises')
router.register(r'enterprises-display', EntepriseListDisplay,
                basename='enterprises-display')
router.register(r'profiles', ProfileList, basename='profiles')
router.register(r'profiles-display', ProfileListDisplay,
                basename='profiles-display')
router.register(r'privileges', PrivilegeList, basename='privileges')
router.register(r'projects', ProjectList, basename='projects')
router.register(r'projects-display', ProjectListDisplay,
                basename='projects-display')
router.register(r'offers', OfferList, basename='offers')
router.register(r'offers-display', OfferListDisplay, basename='offers-display')

urlpatterns = [
    path('', include(router.urls)),

    # users
    path(r'add/', AddUser.as_view(), name='add'),
    path(r'update/<str:pk>/', UpdateUser.as_view(), name='update'),
    path(r'delete/<str:pk>/', DeleteUser.as_view(), name='delete'),
    path(r'get-user/', GetCurrentUser.as_view(), name='get-user'),
    path(r'login/', LoginView.as_view(), name="login"),
    # path(r'login/', obtain_auth_token),

    # profiles
    path(r'add-profile/', AddProfile.as_view())
]
