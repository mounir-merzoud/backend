const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // importation du module body-parser
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path')


// Remplacez `jimbob` par votre nom d'utilisateur et `Mounir-1992` par votre mot de passe
const uri = 'mongodb+srv://mounir:Mounir-1992@cluster0.zp66i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.log('Connexion à MongoDB échouée !', err));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json()); // Utilisez cette ligne pour parser le JSON

app.use('/api/stuff', stuffRoutes); // on utilise le router qui est exposé par stuffRoutes.
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
