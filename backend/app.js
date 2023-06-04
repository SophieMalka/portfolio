const express = require('express');

const bodyParser = require('body-parser');
const userCtrl = require('./controllers/user');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/auth/login', userCtrl.login);

module.exports = app;

