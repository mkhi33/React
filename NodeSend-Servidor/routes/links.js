const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const linkController = require('../controllers/linkController');
const fileController = require('../controllers/fileController');

router.post('/',
    [ check('name', 'Upload a file').not().isEmpty(), check('original_name', 'Upload a file').not().isEmpty() ], 
    auth, linkController.newLink
)

router.get('/:url',
    auth,
    linkController.getLink,
    fileController.deleteFile
)

module.exports = router;