const express = require('express');
const router = express.Router();
const listsCtrl = require('../../controllers/lists');

// /*---------- Public Routes ----------*/
router.post('/', listsCtrl.create);
router.get('/', listsCtrl.index)


/*---------- Protected Routes ----------*/




module.exports = router;