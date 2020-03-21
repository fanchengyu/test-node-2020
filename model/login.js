const {db}=require('../db/database')


// 登录查询用户名
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
module.exports={
  loginSystem
}