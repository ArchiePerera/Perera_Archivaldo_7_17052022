const { Like } = require('../models/index.js');
const { User } = require('../models/index.js');

/* logique pour liker un post */
exports.likePost = (req, res) => {
    try {
        console.log(req.body);
        let { like, userId, postId } = req.body;
        Like.create({like, postId, userId})
            .then(newLike => {
                console.log("nouveau like créé");
                res.status(201).json(newLike);
            })
            .catch(error => res.status(400).json(error))
    } catch {
        error => res.status(500).json(error);
    }  
};
