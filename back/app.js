const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const users = require('./routes/users');

db.sequelize
    .sync()
    .then(() => {
        app.listen(process.env.DBPORT || 3001, () => {
            console.log('server is started :)')
        });
    })
    .catch((err) => {
        console.log('Error connecting :${err.message}');
    });

app.use('/users', users)

module.exports = app;