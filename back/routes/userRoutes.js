const express = require('express');
const router = express.Router();

const userCtl = require("../controllers/user");

// Routes d'authentification

router.post("/signup", userCtl.signup);
router.post("/login", userCtl.login);

module.exports = router;