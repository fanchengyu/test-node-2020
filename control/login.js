
const loginModel=require('../model/login');

const token=require('../utils/token');

//引入node核心模块，加密

const crypto=require('crypto');  // node.js的加密模块
//注册模块
const registerSystem=(req,res)=>{
    const {user_name,pass_word}=req.body;
    //查看用户名是否存在
    loginModel.loginSystem(user_name,(result)=>{
        if(result){
            res.send({
              code:-3,
              state:false,
              message:"用户名已存在"
            })
        }else{
            //创建md5算法
            const hash=crypto.createHash('md5');
            //需要加密的文件
            hash.update(pass_word);
            //得到加密的文件
            //hash.digest('hex')
            loginModel.registerSystem({user_name,pass_word:hash.digest('hex')},result=>{
              if(result){
                res.send({
                  code:0,
                  data:[],
                  message:"注册成功"
                })
              }
            })
        }
    })
}


// 登录模块
const loginSystem=(req,res)=>{
  loginModel.loginSystem(req.body.user_name,result=>{
    if(result){
       //创建md5算法
      const hash =crypto.createHash('md5')
      // 需要加密的文件-- 用户输入的密码
      hash.update(req.body.pass_word)
      if(result.pass_word==hash.digest('hex')){
        token.createToken({user:result.user_name}).then(response=>{
          res.send({
            code:0,
            data:{
              token:response
            },
            message:"登录成功"
          })
        })
      }else{
        res.send({
          code:-2,
          data:[],
          message:"密码错误"
        })
      }
    }else{
      res.send({
        code:-1,
        data:[],
        message:"该用户名不存在"
      })
    }
  })
}






module.exports={
    loginSystem,
    registerSystem
}