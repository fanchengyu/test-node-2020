
const loginModel=require('../model/login');

const token=require('../utils/token');



// 登录模块
const loginSystem=(req,res)=>{
  loginModel.loginSystem(req.body.user_name,result=>{
    if(result){
      if(req.body.pass_word===result.pass_word){
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

//注册模块
// const register=(req,res)=>{
//     const {username,password}=req.body;
//     //查看用户名石佛iu存在
//     userModel.findUser({username},(result)=>{
//         if(result){
//             res.json({
//                 state:false,
//                 info:"用户名已存在"
//             })
//         }else{
//             //创建sha256算法
//             const hash=crypto.createHash('sha256');

//             //需要加密的文件
//             hash.update(password);

//             //得到加密的文件
//             //hash.digest('hex')
//             userModel.saveUser({username,password:hash.digest('hex')},()=>{
//                 res.json({
//                     state:true,
//                     info:"注册成功"
//                 })
//             })
//         }
//     })
// }



//登陆模块
// const login=(req,res)=>{
//     const{username,password}=req.body;
//     userModel.findUser({username},(result)=>{
//         if(result){
//             //用户名存在
//             //创建sha256算法
//             const hash=crypto.createHash('sha256');

//             //需要加密的文件
//             hash.update(password);
//             if(result.password==hash.digest('hex')){
//             //如果用户名中的加密密码==输入密码的加密密码
//                 const token=utils.createToken({user:username},"1901");
//                 res.cookie("token",token);
//                 res.cookie("user",username);
//                 //则后端创建一个cookie并返回给前端
//                 res.json({
//                     state:true,
//                     info:"登陆成功"
//                 })
//             }else{//密码不正确的情况
//                 res.json({
//                     state:false,
//                     info:"密码错误"
//                 })
//             }
//         }else{//用户名不存在的情况
//             res.json({
//                 state:false,
//                 info:"用户名不存在"
//             })
//         }
//     })
// }

module.exports={
    loginSystem
}