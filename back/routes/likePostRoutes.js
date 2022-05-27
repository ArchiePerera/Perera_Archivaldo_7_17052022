const express = require('express');
const router = express.Router();

const likeCtl = require("../controllers/likePost");
const auth = require("../middlewares/auth");


router.post('/posts/:id/like', likeCtl.likePost);


module.exports = router;