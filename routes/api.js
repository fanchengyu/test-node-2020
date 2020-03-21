var express = require('express');
var router = express.Router();
var user=require('../control/user')


router.get('/user', user.getData);
router.post('/user',user.addData);
router.put("/user",user.updataData)
router.delete("/user",user.deleteData)
router.patch("/user",user.deleteMany)


module.exports = router;