const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const userCtrl = require('./controllers/user');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/src/pages/admin')));




app.post('/api/auth/login', userCtrl.login);

module.exports = app;

