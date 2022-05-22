const { User } = require("../models");

// Affichage de tous les profils

exports.allProfiles = async (req, res) => {
    User.findAll()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((error) => {
        res.status(400).json({
            error: error,
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
        console.log(user)

        // Ajout d'une condition pour gérer l'absence d'utilisateur
        
        if (user == null) {
            res.status(404).json({
                message: "Utilisateur non trouvé"
            })
        }
        res.status(200).json(user);
        console.log(req.params)
    })
    .catch((error) => {
        res.status(400).json({
            error: error
        })
    })
};

// Modification d'un profil

exports.modifyProfile = async (req, res) => {

}

// Suppression d'un profil

exports.deleteProfile = async (req, res) => {

};