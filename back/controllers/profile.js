const fs = require("fs");
const { User } = require("../models");

// Affichage de tous les profils

exports.allProfiles = (req, res) => {
    User.findAll()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        });
    });
};

// Affichage d'un profil

exports.oneProfile = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((user) => {

        // Ajout d'une condition pour gérer l'absence utilisateur
        
        if (user == null) {
            res.status(404).json({
                message: "Utilisateur non trouvé"
            })
        }
        res.status(200).json(user);
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        })
    })
};

// Modification d'un profil

exports.modifyProfile = async (req, res) => {
  User.findOne({ 
    where: {
        id: req.params.id
    }
 }).then((profile) => {
    if (profile == null) {
      res.status(404).json({
        message: "Utilisateur non trouvé"
      });
    }

    // Comparaison de l'userId pour que seul le propriétaire du profil puisse delete


    if (profile.id !== req.auth.userId) {
      return res.status(401).json({
        message: "Requête non autorisée"
      });
    }

    console.log("you can modify");
  });
}

// Suppression d'un profil

exports.deleteProfile = (req, res) => {
    User.findOne({ 
        where: {
            id: req.params.id
        }
     }).then((profile) => {
        if (profile == null) {
          res.status(404).json({
            message: "Utilisateur non trouvé"
          });
        }
    
        // Comparaison de l'userId pour que seul le propriétaire du profil puisse delete

    
        if (profile.id !== req.auth.userId) {
          return res.status(401).json({
            message: "Requête non autorisée"
          });
        }
    
        // Suppression de l'image dans le système de fichiers et de son lien en BDD
    
        const filename = profile.img_profile.split("/profiles/")[1];
        fs.unlink(`profiles/${filename}`, () => {
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
            .catch((error) => {
              res.status(400).json({
                error: error,
              });
            });
       });
      });
    };