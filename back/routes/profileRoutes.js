const express = require('express');
const router = express.Router();

const profileCtl = require("../controllers/profile");

// Routes Profils d'utilisateurs

router.get("/profiles", profileCtl.allProfiles);
router.get("/profiles/:id", profileCtl.oneProfile);

module.exports = router;