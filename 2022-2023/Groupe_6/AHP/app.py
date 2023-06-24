from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import requests
import geocoder
from flask_pymongo import PyMongo
from geopy.geocoders import Nominatim
from math import radians, sin, cos, sqrt, atan2
import json
import geocoder
import requests

from geopy.distance import geodesic

app = Flask(__name__)
mongo_db = PyMongo(app, uri='mongodb://127.0.0.1:27017/crime_report')
db = mongo_db.db

# client = MongoClient('mongodb://localhost:27017/')  # Remplacez l'URL de connexion MongoDB appropriée
CORS(app)
# Route pour la page de connexion


def obtenir_coordonnees():
    g = geocoder.ip('me')
    latitude = g.lat
    longitude = g.lng
    print(latitude, longitude)
    response = {
        'latitude': latitude, 'longitude': longitude}
    return jsonify(response)


@app.route('/position', methods=['GET'])
def obtenir_coordonnees():
    g = geocoder.ip('me')
    latitude = g.lat
    longitude = g.lng
    print(latitude, longitude)
    response = {
        'latitude': latitude, 'longitude': longitude}
    return jsonify(response)


@app.route('/login', methods=['POST'])
def login():
    username = request.json["username"]
    password = request.json["password"]
    print(username, password)
    user = db.users.find_one({'username': username})
    print(user)
    if user and user['password'] == password:
        # Authentification réussie
        response = {'message': 'Authentification réussie', 'code': 200}
        return jsonify(response), 200
    else:
        # Authentification échouée
        response = {
            'message': 'Nom d\'utilisateur ou mot de passe incorrect', 'code': 202}
        return jsonify(response)


@app.route('/test', methods=['GET'])
def test():
    response = {
        'message': 'Le formulaire a été enregistré avec succès', 'code': 200}
    return jsonify(response)

# Route pour l'enregistrement du formulaire


@app.route('/register', methods=['POST'])
def enregistrer():
    username = request.json["username"]
    password = request.json["password"]
    password1 = request.json["password1"]
    fullname = request.json["fullname"]
    mobile = request.json["mobile"]
    email = request.json["email"]
    adress = request.json["adress"]

    # Création de l'objet à enregistrer dans la base de données
    formulaire = {
        'username': username,
        'email': email,
        'password': password,
        'password1': password1,
        'fullname': fullname,
        'mobile': mobile,
        'adress': adress
    }

    # Insertion du formulaire dans la collection
    db.users.insert_one(formulaire)

    # Réponse JSON pour indiquer que l'enregistrement a réussi
    response = {
        'message': 'Le formulaire a été enregistré avec succès', 'code': 200}
    return jsonify(response), 200


@app.route('/infocrime', methods=['GET'])
def crime():
    val = []
    result = db.Stat.find()
    for i in result:
        val.append(i)
    print(val)
    return json.loads(json.dumps(val))


@app.route('/insert', methods=['POST'])
def insert():
    pays = request.json["pays"]
    quartier = request.json["quartier"]
    type_crime = request.json["type_crime"]
    nbre_victime = request.json["nbre_victime"]
    gravité = request.json["gravité"]
    message = request.json["message"]
    description = request.json["description"]
    ville = request.json["ville"]
    image = request.json["image"]

    # Création de l'objet à enregistrer dans la base de données
    formulaire = {
        'pays': pays,
        'ville': ville,
        'quartier': quartier,
        'type_crime': type_crime,
        'nbre_victime': nbre_victime,
        'gravité': gravité,
        'image': image,
        'message': message,
        'description': description,
        'latitude': 20,
        'longitude': 50
    }

    # Insertion du formulaire dans la collection
    db.Stat.insert_one(formulaire)

    # Réponse JSON pour indiquer que l'enregistrement a réussi
    response = {
        'message': 'Le formulaire a été enregistré avec succès', 'code': 200}
    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)
    app.run()
