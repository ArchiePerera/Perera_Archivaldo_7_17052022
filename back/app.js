// Mise à disposition des modules de fonctionnement de l'API

const express = require('express');
const path = require("path");

// Initialisation du module Express

const app = express();
app.use(express.json());

//--------------------- SÉCURITÉ ----------------------

// Implémentation de CORS - All Origin - Header's Default

const cors = require('cors');
app.use(cors());

// Initialisation d'Helmet (Sécurisation des headers)

const helmet = require('helmet');
app.use(helmet({ 
    crossOriginResourcePolicy: { policy: "same-site" } 
}));

// Initialisation du limiteur de requêtes à 100 sur 1h

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, //1h
    message: "Too many request from this IP"
});

//----------------- BASE DE DONNÉES -------------------

const db = require('./models');

// Connexion à la BDD

db.sequelize
    .sync()
    .then(() => {
        app.listen(process.env.DBPORT || 3001, () => {
            console.log('server is started :)')
        });
    })
    .catch((err) => {
        console.log(`Error connecting :${err.message}`);
    });

//----------------- ROUTES -----------------------------

// Mise à disposition du chemin vers le répertoire profil utilisateur

app.use("/images/profiles", express.static(path.join(__dirname, "profiles")));

// Mise à disposition du chemin vers le répertoire feeds

app.use("/images/feeds", express.static(path.join(__dirname, "feeds")));

// Mise à disposition des fichiers routes

const userRoutes = require('./routes/userRoutes');

// Routes

app.use('/api/auth', userRoutes);

module.exports = app;