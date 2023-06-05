const express = require('express');
const { cors } = require('./middlewares/cors');
const app = express();
const userCtrl = require('./controllers/user');


require('dotenv').config();


app.use(express.json());

app.use(cors);


app.post('/api/auth/login', userCtrl.login);

module.exports = app;
