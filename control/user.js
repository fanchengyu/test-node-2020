
const userModel=require('../model/user');
const {getId} =require('../utils/util')


const token=require('../utils/token');

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


module.exports={
    getData,
    addData,
    updataData,
    deleteData,
    deleteMany,
}