var express = require('express');
var router = express.Router();
var user=require('../control/login')




router.post('',user.loginSystem)

module.exports = router;