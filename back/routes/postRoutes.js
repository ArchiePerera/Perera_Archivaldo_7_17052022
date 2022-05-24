const express = require('express');
const router = express.Router();

const postCtl = require("../controllers/post");
const auth = require("../middlewares/auth");
const multerProfile = require("../middlewares/multer-config_feed")

// ---------------- Routes Post -------------------------

router.get("/posts", auth, postCtl.allPost);
router.get("/posts", auth, postCtl.createPost);
router.get("/posts/:id", auth, postCtl.onePost);
router.put("/posts/:id", auth, multerProfile, postCtl.modifyPost);
router.delete("/posts/:id", auth, postCtl.deletePost);

module.exports = router;