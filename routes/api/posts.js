const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer = require('multer');
const upload = multer();

// /*---------- Public Routes ----------*/
router.post('/',postsCtrl.create);
router.get('/', postsCtrl.index)


/*---------- Protected Routes ----------*/
function checker(req, res){
console.log("router", req.body)
}



module.exports = router;