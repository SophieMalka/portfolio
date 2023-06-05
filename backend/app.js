const express = require('express');
const { cors } = require('./middlewares/cors');
const app = express();
const bodyParser = require('body-parser');
const userCtrl = require('./controllers/user');


require('dotenv').config();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors);


app.post('/api/auth/login', userCtrl.login);

module.exports = app;
