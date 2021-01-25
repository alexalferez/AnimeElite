const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/lists');
const multer  = require('multer')
const upload = multer()

// /*---------- Public Routes ----------*/
router.post('/', listsCtrl.create);
router.get('/', listsCtrl.index)


/*---------- Protected Routes ----------*/




module.exports = router;