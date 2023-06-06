const express = require('express');
const path = require('path');
require('dotenv').config();

const { cors } = require('./middlewares/cors');
const multer = require('./middlewares/multer');

const userCtrl = require('./controllers/user');
const projectCtrl = require('./controllers/project');

const app = express();

app.use(express.json());
app.use(cors);

app.post('/api/auth/login', userCtrl.login);
app.get('/api/projects', projectCtrl.getAllProjects);
app.post('/api/project', multer, projectCtrl.createProject);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
