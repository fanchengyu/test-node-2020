var express = require('express');
var router = express.Router();


router.get('/user', function(req, res, next) {
  console.log("req",req)
  res.send({code:0,data:[1,2,3,4],message:'成功'});
});

module.exports = router;