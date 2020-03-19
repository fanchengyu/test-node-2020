//const mongoose = require("mongoose");

const mysql =require("mysql")

// 创建连接
const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'mysql'
})

db.connect(err=>{
  if(err){throw err}
  console.log("mysql数据库连接成功！")
})

// var redis = require('redis'),
//     RDS_PORT = 6379,
//     RDS_HOST = '127.0.0.1',
//     RDS_OPTS = {},
//     client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
 
// client.on('ready', function(res){
// 	console.log('redis启动成功')
// })


module.exports={
   db
}