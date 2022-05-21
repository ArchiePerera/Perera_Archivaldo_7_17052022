const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");

exports.signup = async (req, res, next) => {
  const values = req.body;

  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
      bio: req.body.bio,
      img_profile: req.body.img_profile,
    });

    // Vérification via une regex de la forme de l'input entrée par l'utilisateur dans le champ email

    if (!/^[\w\d.+-]+@[\w.-]+\.[a-z]{2,}$/.test(req.body.email)) {
      return res.status(400).json({ message: "email invalide" });
    }

    console.log(user);
    user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
  })
  .catch((error) => res.status(500).json({ error }));
};
