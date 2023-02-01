const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const fileController = require('../controllers/fileController');


router.post('/', auth, fileController.uploadFile);
router.get('/:file', fileController.downloadFile, fileController.deleteFile);

module.exports = router;