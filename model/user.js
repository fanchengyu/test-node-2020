 const {db}=require('../db/database')


//数据的查询
const findTableData=(userInfo,cb)=>{
  if(userInfo){
    //
  }else{
    let sql="select * from person"
    db.query(sql,(err,result)=>{
      if(err){
        throw err
      }else{
        cb(result)
      }
    })
  }
   
}

//数据的增加
const addTableData=(userInfo,cb)=>{
    if(userInfo){
      let sql ='insert into person set ?'
      db.query(sql,userInfo,(err,result)=>{
        if(err){
          throw err
        }else{
          cb(true)
        }
      })
    }
}
// 数据的更改
const updataData=(userInfo,cb)=>{
  if(userInfo){
    const {id,name,tel,address,sculpture} =userInfo
    let sql =`update person set name=${JSON.stringify(name)},sculpture=${JSON.stringify(sculpture)},tel=${JSON.stringify(tel)},address=${JSON.stringify(address)} where id=${JSON.stringify(id)}`
    if(!sculpture){
      sql =`update person set name=${JSON.stringify(name)},tel=${JSON.stringify(tel)},address=${JSON.stringify(address)} where id=${JSON.stringify(id)}`
    }
    db.query(sql,(err,result)=>{
      if(err){
        throw err
      }else{
        cb(true)
      }
    })
  }
}

// 数据的删除
const deleteData=(userInfo,cb)=>{
  const {id}=userInfo.query
  let sql=`delete from person where id=${JSON.stringify(id)}`
  db.query(sql,(err,result)=>{
    if(err){
      throw err
    }else{
      cb(true)
    }
  })
}

//数据的批量删除
const deleteMany=(userInfo,cb)=>{
  if(userInfo){
    const ids=userInfo.map(item=>JSON.stringify(item)).join(',')
    let sql=`delete from person where id in (${ids})`
    db.query(sql,(err,result)=>{
      if(err){
        throw err
      }else{
        cb(true)
      }
    })
  }
}
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
  findTableData,
  addTableData,
  updataData,
  deleteData,
  deleteMany,
  loginSystem
}