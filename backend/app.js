const express = require('express');
const path = require('path');
require('dotenv').config();

const { cors } = require('./middlewares/cors');
const multer = require('./middlewares/multer');

const projectCtrl = require('./controllers/project');

const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');

const app = express();

app.use(express.json());
app.use(cors);

app.use('/api/auth', userRoutes);
app.use('/api/projects', projectRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
