const path=require("path");
const jobModel=require("../model/job");
const Cookie=require("../utils/getCookie");
const JwtToken=require("../utils/token");

//商品的添加
//这时候添加到mongodb里的数据会生成一个id
const addjob=(req,res)=>{
    const{jobName,jobSales,jobMust,comName}=req.body;

  
    
   /* const jobLogo=req.files.jobLogo[0].path;
   
    const url="http://127.0.0.1:3000/img/"+path.parse(jobLogo).base;*/


    //获取客户端的cookie
    const token =Cookie.getCookie(req,"token");
    
 
    //token的校验
    JwtToken.tokenVerify(token,"1901",function(err){
        
        if(err){
            //没有登陆
            res.json({
                state:false,
                info:"token过期,请重新登陆"
            })
        }else{
            jobModel.jobSave({jobName,jobSales,jobMust,comName/*jobLogo:url*/},()=>{
                res.json({
                    
                    state:true,
                    info:"添加成功"
                })
            })
        }
    })
}

//前端获取商品数据
const jobList=(req,res)=>{
    //获取客户端的cookie
    const token =Cookie.getCookie(req,"token");
    //token的校验
    JwtToken.tokenVerify(token,"1901",function(err){
        if(!err){
            jobModel.jobFind((data)=>{
                res.json({
                    state:true,
                    data,
                    info:"OK"
                })
            })
        }
    })
}

//商品的删除
const Jobdelete=(req,res)=>{
    const{id}=req.query;
//获取客户端的cookie
    const token =Cookie.getCookie(req,"token");
    //token的校验
    JwtToken.tokenVerify(token,"1901",function(err){
        if(!err){
            jobModel.jobDelete({_id:id},()=>{
                res.json({
                    state:true,
                    info:"删除成功"
                })
            })
        }
    })
}
 //商品的更改
 const updateJob=(req,res)=>{
     const {jobName,jobSales,jobMust,comName,picId}=req.body;
    /* const jobLogo=req.files.jobLogo[0].path;
     const url= "http://127.0.0.1:3000/img/"+path.parse(jobLogo).base;*/
        //获取客户端的cookie
     const token =Cookie.getCookie(req,"token");
     console.log("到这里的")

     //token的校验
     JwtToken.tokenVerify(token,"1901",function(err){
         if(!err){
             jobModel.jobModify({_id:picId},{jobName,jobSales,jobMust,comName,/*jobLogo:url*/},(result)=>{
                 if(result.ok){
                     res.json({
                         state:true,
                         info:"修改成功"
                     })
                 }
             })
         }
     })
 }   

module.exports={
    addjob,
    jobList,
    Jobdelete,
    updateJob
}
/*let formData=new FormData();
formData.append("jobName",jobName);
formData.append("jobSales",jobSales);
formData.append("jobMust",jobmust);
formData.append("comName",comName);
formData.append("id",picId);
formData.append("jobLogo",jobLogo[0].files[0]);
*/