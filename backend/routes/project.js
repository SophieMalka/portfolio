const express = require('express');
const router = express.Router();

const projectCtrl = require('../controllers/project');
const multer = require('../middlewares/multer');

router.get('/', projectCtrl.getAllProjects);
router.get('/:id', projectCtrl.getOneProject);
router.post('/', multer, projectCtrl.createProject);
router.put('/:id', multer, projectCtrl.updateProject);
router.delete('/:id', projectCtrl.deleteProject);

module.exports = router;