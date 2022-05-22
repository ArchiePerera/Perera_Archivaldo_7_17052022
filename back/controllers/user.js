const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.signup = (req, res, next) => {

    // Mise à disposition du lien vers l'image utilisateur par défaut

  const avatarDefault =
    `${req.protocol}://${req.get("host")}/images/profiles/default/user.jpg`;

    //Création du hash pour masquer le mot de passe en BDD

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        bio: req.body.bio,
        img_profile: avatarDefault,
      });

      // Vérification via une regex de la forme de l'input entrée par l'utilisateur dans le champ email

      if (!/^[\w\d.+-]+@[\w.-]+\.[a-z]{2,}$/.test(req.body.email)) {
        return res.status(400).json({ message: "email invalide" });
      }

      // Création de l'utilisateur en BDD

      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {

  // Vérification de l'input entré par l'utilisateur dans le champ email

  if (!/^[\w\d.+-]+@[\w.-]+\.[a-z]{2,}$/.test(req.body.email)) {
    return res.status(400).json({ message: "email invalide" });
  }

  // Recherche de l'email dans la Base de données

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }

      // Comparaison des Hashes pour le mot de passe utilisateur

      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.TOKEN, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
