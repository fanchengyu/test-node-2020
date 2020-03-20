
const userModel=require('../model/user');
const {getId} =require('../utils/util')
//引入node核心模块，加密

//const crypto=require('crypto');

//const utils=require('../utils/token');

// 获取表格数据模块
const getData=(req,res)=>{
  userModel.findTableData('',result=>{
    if(result){
      res.send({
        code:0,
        data:result,
        message:'查询成功'
      })
    }
  })
}

// 添加数据模块
const addData=(req,res)=>{
  const info=Object.assign(req.body,{id:getId()})
  userModel.addTableData(info,result=>{
    if(result){
      res.send({
        code:0,
        data:[],
        message:'添加成功'
      })
    }
  })
}

// 表格数据更新模块
const updataData=(req,res)=>{
  userModel.updataData(req.body,result=>{
    if(result){
      res.send({
        code:0,
        data:[],
        message:'修改成功'
      })
    }
  })
}

// 删除数据模块
const deleteData=(req,res)=>{
  userModel.deleteData(req,result=>{
    if(result){
      res.send({
        code:0,
        data:[],
        message:'删除成功'
      })
    }
  })
}

// 批量删除模块
const deleteMany=(req,res)=>{
  userModel.deleteMany(req.body,result=>{
    if(result){
      res.send({
        code:0,
        data:[],
        message:'批量删除成功'
      })
    }
  })
}

// 登录模块
const loginSystem=(req,res)=>{
  userModel.loginSystem(req.body.user_name,result=>{
    if(result){
      if(req.body.pass_word===result.pass_word){
        res.send({
          code:0,
          data:[],
          message:"登录成功"
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
   // register,
    //login,
    getData,
    addData,
    updataData,
    deleteData,
    deleteMany,
    loginSystem
}