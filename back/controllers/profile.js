const fs = require("fs");
const { User } = require("../models");

//---------------------- Affichage de tous les profils  ---------------

exports.allProfiles = (req, res) => {
  User.findAll({

    // Exclusion du mdp dans la réponse

    attributes: {
      exclude: ["password"]
    }
  })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(400).json({
        error: "mauvaise requête :" + err
      });
    });
};

//------------------------- Affichage d'un profil --------------------

exports.oneProfile = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },

    // Exclusion du mdp dans la réponse

    attributes: {
      exclude: ["password"],
    },
  })
    .then((user) => {
      // Ajout d'une condition pour gérer l'absence utilisateur

      if (user == null) {
        res.status(404).json({
          error: "Utilisateur non trouvé",
        });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json({
        error: "mauvaise requête :" + err
      });
    });
};

// --------------------------- Modification d'un profil -----------------

exports.modifyProfile = async (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((profile) => {
    if (profile === null) {
      return res.status(401).json({
        error: "Utilisateur non trouvé"
      });
    }

    console.log(req)
    console.log(profile)

    // Comparaison de l'userId pour que seul le propriétaire du profil puisse delete

    if (profile.id !== req.auth.userId) {
      return res.status(401).json({
        error: "Requête non autorisée",
      });
    }

//    console.log("you can modify");

    // Modification du profil utilisateur (if sans image else avec image)

    if (profile !== null && !req.file) {
      User.update({ ...req.body, id: req.params.id }, { where: { id: req.params.id } })
      .then(() => res.status(200).json({
        message: "profil utilisateur modifié"
      }))
      .catch((err) => res.status(400).json({
        error: "mauvaise requête: " + err
      }))
    } else if (profile !== null) {

      // Modification du profil utilisateur avec une image - efface l'image précédente si celle-ci n'est pas celle par défaut

      const filename = profile.img_profile.split("/images/profiles/")[1];
      fs.unlink(`images/profiles/${filename}`, () => {
        console.log("image supprimée");
      });

      const profileObject = {
        ...req.body,
        img_profile: `${req.protocol}://${req.get('host')}/images/profiles/${req.file.filename}`,
      };

      User.update(
        
        { ...profileObject, id: req.params.id }, { where: { id: req.params.id }}
      )
        .then(() => res.status(200).json({ message: "profil utilisateur modifié" }))
        .catch((error) => res.status(400).json({ error }));
    
    }

  });
};

// ---------------------------- Suppression d'un profil --------------------------------

exports.deleteProfile = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((profile) => {
    if (profile == null) {
      res.status(404).json({
        error: "Utilisateur non trouvé",
      });
    }

    // Comparaison de l'userId pour que seul le propriétaire du profil puisse delete

    if (profile.id !== req.auth.userId) {
      return res.status(401).json({
        error: "Requête non autorisée",
      });
    }

    // Suppression de l'image dans le système de fichiers et de son lien en BDD

    const filename = profile.img_profile.split("/images/profiles/")[1];
    fs.unlink(`images/profiles/${filename}`, () => {
      User.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then(() => {
          res.status(200).json({
            message: "Utilisateur supprimé",
          });
        })
        .catch((err) => {
          res.status(400).json({
            error: "mauvaise requête :" + err
          });
        });
    });
  });
};
