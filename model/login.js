const {db}=require('../db/database')


// 登录/注册查询用户名
const loginSystem=(user_name,cb)=>{
  if(user_name){
    let sql=`select * from user_info where user_name=${JSON.stringify(user_name)}`
    db.query(sql,(err,result)=>{
      if(err){
        throw err
      }else{
        cb(result[0])
      }
    })
  }
}

//注册用户信息
const registerSystem=(userInfo,cb)=>{
  if(userInfo){
    let sql ='insert into user_info set ?'
     db.query(sql,userInfo,(err,result)=>{
       if(err){
        throw err
       }else{
        cb(true)
      }
    })
  }
}
module.exports={
  loginSystem,registerSystem
}