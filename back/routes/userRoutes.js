const express = require('express');
const router = express.Router();
const { Users } = require("../models");


const userCtl = require("../controllers/user");

router.get("/users", async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
});

router.post("/signup", userCtl.signup);


module.exports = router;