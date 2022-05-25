const { Comment } = require("../models");

exports.createComment = (req, res) => {
    Comment.create({
        UserId: req.auth.userId,
        content: req.body.content,
      })
        .then(() =>
          res.status(200).json({
            message: "Commentaire créé",
          })
        )
        .catch((err) =>
          res.status(400).json({
            error: "Mauvaise requête: " + err,
          })
        );
};

exports.allComment = (req, res) => {
    Comment.findAll()
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((err) => {
      res.status(400).json({
        error: "Mauvaise requête :" + err,
      });
    });
};

exports.oneComment = (req, res) => {
    Comment.findOne()
    .then((comment) => {

      // Ajout d'une condition pour gérer l'absence de commentaire

      if (comment == null) {
        res.status(401).json({
          error: "Commentaire non trouvé",
        });
      }
      res.status(200).json(post);
    })
    .catch((err) => {
      res.status(400).json({
        error: "Mauvaise requête :" + err,
      });
    });
};

exports.modifyComment = (req, res) => {
    Comment.findOne({
        where: {
          id: req.params.id,
        },
      }).then((comment) => {
        if (comment === null) {
          return res.status(401).json({
            error: "Commentaire non trouvé",
          });
        }
    
        // Comparaison de l'userId pour que seul le propriétaire du commentaire puisse modifier
    
        if (comment.id !== req.auth.userId) {
          return res.status(401).json({
            error: "Requête non autorisée",
          });
        }
    
        //    console.log("you can modify");
    
        // Modification du commentaire
    
    
          Comment.update(
            { ...req.body, id: req.params.id },
            { where: { id: req.params.id } }
          )
            .then(() =>
              res.status(200).json({
                message: "Commentaire modifié",
              })
            )
            .catch((err) =>
              res.status(400).json({
                error: "Mauvaise requête: " + err,
              })
            );
      });
};

exports.deleteComment = (req, res) => {
    Comment.findOne({
        where: {
          id: req.params.id,
        },
      }).then((comment) => {
        if (comment == null) {
          res.status(404).json({
            error: "Utilisateur non trouvé",
          });
        }
    
        // Comparaison de l'userId pour que seul le propriétaire du commentaire puisse delete
    
        if (comment.id !== req.auth.userId) {
          return res.status(401).json({
            error: "Requête non autorisée",
          });
        }
    
          Comment.destroy({
            where: {
              id: req.params.id,
            },
          })
            .then(() => {
              res.status(200).json({
                message: "Commentaire supprimé",
              });
            })
            .catch((err) => {
              res.status(400).json({
                error: "Mauvaise requête :" + err,
              });
            });
       
      });
};