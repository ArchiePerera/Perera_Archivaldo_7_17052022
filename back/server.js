const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const db = require('./models');

const users = require('./routes/users');

app.use('/users', users)

db.sequelize
    .sync()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('server is started :)')
        });
    })
    .catch((err) => {
        console.log('Error connecting :${err.message}');
    });