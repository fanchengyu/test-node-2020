var jwt = require('jsonwebtoken');
var signkey = 'mes_qdhd_mobile_xhykjyxgs';

const createToken = function(info){
	return new Promise((resolve,reject)=>{
		const token = jwt.sign(info,signkey,{ expiresIn:'1h' });
		resolve(token);
	})
}

const tokenVerify = function(token){
	return new Promise((resolve,reject)=>{
    var info = jwt.verify(token,signkey);
    if(!!info){
      resolve(info);
    }else{
      reject(info)
    }
		
	})
}


module.exports={
    createToken,
    tokenVerify
}