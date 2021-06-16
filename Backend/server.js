
//Appel du package Mongoose
const mongoose = require('mongoose');

//Appel du package dotenv pour utilisé le fichier de jointure en express node et mongodb .env
require('dotenv').config({
    path: '.env'
});



//Test de connection = en paramètre on appel la constante DATABASE=mongodb://localhost:27017/ecommerce du fichier .env
mongoose.connect(process.env.DATABASE,{
    //Refresh toute les 30 sec
    useUnifiedTopology: true,
    //Analyse les url
    useNewUrlParser: true
});

//Creation d'une promesse = Dire a mongoose d'utilisé les promesse ES6
mongoose.Promise = global.Promise
//Message d'erreur si MongoDb recontre un problème de connexion
mongoose.connection.on('error', (err) => {
    console.log(`Erreur de connexion a MongoDB -> ${err.message}`);
});

//Appel du ficher app.js et son contenus
const app = require('./app');

//Demarrer le serveur sur un port specifié ici = 3000
const server = app.listen(3000, () => {
    console.log(`ExpressJS tourne sur le port 3000 -> TEST ${server.address().port}`);
});