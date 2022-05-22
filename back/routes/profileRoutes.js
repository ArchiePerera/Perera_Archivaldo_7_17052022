const express = require('express');
const router = express.Router();

const profileCtl = require("../controllers/profile");
const auth = require("../middlewares/auth");

// Routes Profils d'utilisateurs

router.get("/profiles", auth, profileCtl.allProfiles);
router.get("/profiles/:id", profileCtl.oneProfile);

module.exports = router;