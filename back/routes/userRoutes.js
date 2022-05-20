

const express = require('express');
const router = express.Router();

const { Users } = require("../models");

router.get('/users', async (req, res) => {
    const users = await Users.findAll();
    res.json(users);
});

router.post('/signin', async (req, res) => {
    const values = req.body;
    const createdUser = await Users.create(values);
    res.json(createdUser);
});


module.exports = router;