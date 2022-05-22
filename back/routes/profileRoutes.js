const express = require('express');
const router = express.Router();

const profileCtl = require("../controllers/profile");
const auth = require("../middlewares/auth");

// Routes Profils d'utilisateurs

router.get("/profiles", auth, profileCtl.allProfiles);
router.get("/profiles/:id", auth, profileCtl.oneProfile);
router.put("/profiles/:id", auth, profileCtl.modifyProfile);
router.delete("/profiles/:id", auth, profileCtl.deleteProfile);

module.exports = router;