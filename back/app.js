const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const users = require('./routes/users');

app.use('/users', users)

module.exports = app;