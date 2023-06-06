const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project');

router.get('/', projectCtrl.getAllProjects);
router.post('/', multer, projectCtrl.createProject);