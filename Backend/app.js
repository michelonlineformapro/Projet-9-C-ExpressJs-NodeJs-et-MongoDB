//Appel du framework express.js
const express = require('express');
//init de app avec express
const app = express();
//Appel du package mongoose
const mongoose = require('mongoose');

//Creation de promesse = Dire a mongoose d'utilisé les promesses ES6
mongoose.Promise = global.Promise;

//Creation du Schema de la collection Livres (reprise de la nomenclature de la collection Mongodb DB ecommerce => livres
const LivresSchema = new mongoose.Schema({
    nomLivre: {type: String},
    descriptionLivre: {type: String},
    prixLivre: {type: Number},
    imageLivre: {type: String}
})
//Strock du model de la collections dans une variable
let Livres = mongoose.model('livres', LivresSchema, 'livres');

//Creer route une route de base = localhost:3000

app.get('/', (request, response) => {
    console.log('tets')
    response.send('Le serveur est demarrer !');
});

//Notre routes pour afficher tous les livres http://localhost:3000/livres

//ici app (ligne 4) utilise la methode GET + une requète http similaire a fetch() requete + reponse

app.get('/livres', async (request, response) => {
    //Mongoose utilise la methode find() pour parcourir les element comme un forEach()
    const livres = await Livres.find();
    //La reponse envoyée est au format Json() + notre find en paramètres
    response.json(livres)
});

//Exporter app pour l'importer dans le fichier server.js
module.exports = app;