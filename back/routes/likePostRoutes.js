const express = require('express');
const router = express.Router();

const likeCtl = require("../controllers/likePost");
const auth = require("../middlewares/auth");


router.post('/posts/:id/like', likeCtl.likePost);
router.delete('/:id/unlike', likeCtl.unlikePost);
router.get('/:id/likes', likeCtl.getAllLikesPost);

module.exports = router;