var express = require('express');
var router = express.Router();
var {loginSystem,registerSystem}=require('../control/login')




router.post('',loginSystem)
router.post('/register',registerSystem)

module.exports = router;