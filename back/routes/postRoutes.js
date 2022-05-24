const express = require('express');
const router = express.Router();

const profileCtl = require("../controllers/profile");
const auth = require("../middlewares/auth");
const multerProfile = require("../middlewares/multer-config_feed")

// ---------------- Routes Profils d'utilisateurs -------------------------

router.get("/posts", auth, profileCtl.allProfiles);
router.get("/posts/:id", auth, profileCtl.oneProfile);
router.put("/posts/:id", auth, multerProfile, profileCtl.modifyProfile);
router.delete("/posts/:id", auth, profileCtl.deleteProfile);

module.exports = router;