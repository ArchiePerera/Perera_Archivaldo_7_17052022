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
    crossOriginResourcePolicy: { 
        policy: "same-site" 
    } 
}));

// Initialisation du limiteur de requêtes à 100 sur 1h

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, //1h
    message: "Trop de requêtes en provenance de cet IP"
});

// ----------------- SESSION --------------------------

const session = require('express-session');

const sessionConfig = {
    name: 'take a cookie',
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false, // Mettre sur 'true' en production: https access only
        httpOnly: true, // Pas d'injection JS
    },
    resave : false,
    saveUninitialized: true,
};

app.use(session(sessionConfig));

//----------------- BASE DE DONNÉES -------------------

const db = require('./models');

// Connexion à la BDD

db.sequelize
    .sync()
    .then(() => {
        app.listen(process.env.DBPORT || 3001, () => {
            console.log('Le serveur tourne :)')
        });
    })
    .catch((err) => {
        console.log(`Erreur de connexion :${err.message}`);
    });

//----------------- ROUTES -----------------------------

// Mise à disposition du chemin vers le répertoire profil utilisateur

app.use("/images/profiles", express.static(path.join(__dirname, "profiles")));

// Mise à disposition du chemin vers le répertoire feeds

app.use("/images/feeds", express.static(path.join(__dirname, "feeds")));

// Mise à disposition des fichiers routes

const { Server } = require('http');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Routes 

app.use('/api/auth', userRoutes);
app.use('/api', profileRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

module.exports = app;