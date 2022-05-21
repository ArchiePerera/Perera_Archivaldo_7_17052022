const express = require('express');
const router = express.Router();
const { User } = require("../models");

const userCtl = require("../controllers/user");

router.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post("/signup", userCtl.signup);
router.post("/login", userCtl.login);

module.exports = router;