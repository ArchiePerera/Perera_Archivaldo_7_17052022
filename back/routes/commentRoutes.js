const express = require('express');
const router = express.Router();

const commentCtl = require("../controllers/comment");
const auth = require("../middlewares/auth");

// ---------------- Routes Comments -------------------------

router.get("/posts/:id/comments", auth, commentCtl.allComment);
router.post("/posts/:id/comments", auth, commentCtl.createComment);
router.get("/posts/:id/comments/:id", auth, commentCtl.oneComment);
router.put("/posts/:id/comments/:id", auth, commentCtl.modifyComment);
router.delete("/posts/:id/comments/:id", auth, commentCtl.deleteComment);

module.exports = router;