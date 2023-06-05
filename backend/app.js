const express = require('express');
const { cors } = require('./middlewares/cors');
const app = express();
const userCtrl = require('./controllers/user');
const projectCtrl = require('./controllers/project');
const multer = require('./middlewares/multer');


require('dotenv').config();


app.use(express.json());

app.use(cors);


app.post('/api/auth/login', userCtrl.login);
app.get('/api/projects', projectCtrl.getAllProjects);
app.post('/api/project', multer, projectCtrl.createProject);

module.exports = app;
