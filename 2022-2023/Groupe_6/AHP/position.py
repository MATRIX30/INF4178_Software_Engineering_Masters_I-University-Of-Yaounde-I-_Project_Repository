from geopy.geocoders import Nominatim
from math import radians, sin, cos, sqrt, atan2

import geocoder
import requests

from geopy.distance import geodesic


def calculer_distance(lat1, lon1, lat2, lon2):
    # Création des points de coordonnées géographiques
    point1 = (lat1, lon1)
    point2 = (lat2, lon2)

    # Calcul de la distance géodésique
    distance = geodesic(point1, point2).kilometers

    return distance


# Coordonnées géographiques de votre position
votre_latitude = 37.7749
votre_longitude = -122.4194

# Coordonnées géographiques de l'autre lieu
autre_latitude = 34.0522
autre_longitude = -118.2437

# Appel de la fonction pour calculer la distance
distance = calculer_distance(
    votre_latitude, votre_longitude, autre_latitude, autre_longitude)

# Affichage du résultat
print("La distance entre votre position et l'autre lieu est de",
      distance, "kilomètres.")


def obtenir_coordonnees():
    g = geocoder.ip('me')
    latitude = g.lat
    longitude = g.lng

    return latitude, longitude


# Appel de la fonction pour obtenir les coordonnées
votre_latitude, votre_longitude = obtenir_coordonnees()

# Affichage du résultat
print("Vos coordonnées géographiques sont :")
print("Latitude :", votre_latitude)
print("Longitude :", votre_longitude)
