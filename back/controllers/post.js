const fs = require("fs");
const { Post } = require("../models");


exports.createPost = (req, res) => {
    Post
    .create({
        UserId: req.auth.userId,
        title: req.body.title,
        content: req.body.content,
    })
    .then(() => res.status(200).json({
        message: "post créé"
      }))
      .catch((err) => res.status(400).json({
        error: "mauvaise requête: " + err
      }))
};

exports.allPost = (req, res) => {
    Post.findAll()
        .then((users) => {
          res.status(200).json(users);
        })
        .catch((err) => {
          res.status(400).json({
            error: "mauvaise requête :" + err
          });
        });
};

exports.onePost = (req, res) => {
    Post.findOne()
        .then((post) => {
          
          // Ajout d'une condition pour gérer l'absence de Post
    
          if (post == null) {
            res.status(401).json({
              error: "Post non trouvé",
            });
          }
          res.status(200).json(post);
        })
        .catch((err) => {
          res.status(400).json({
            error: "mauvaise requête :" + err
          });
        });

};

exports.modifyPost = (req, res) => {

};

exports.deletePost = (req, res) => {

};