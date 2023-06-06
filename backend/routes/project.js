const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project');
const multer = require('../middlewares/multer');

router.get('/', projectCtrl.getAllProjects);
router.post('/', multer, projectCtrl.createProject);

module.exports = router;