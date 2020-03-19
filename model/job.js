const mongoose=require("../db/database").mongoose;

const Job=mongoose.model("job",{
    jobName:String,
    jobSales:Number,
    jobMust:String,
    comName:String,
    joblogo:String
});

const jobSave=(jobInfo,cb)=>{
    const job =new Job(jobInfo);
    job.save().then(()=>{
        cb();
    })
}

const jobFind=(cb)=>{
    Job.find().then((result)=>{
        cb(result)
    })
}

const jobDelete =(jobInfo,cb)=>{
    Job.remove(jobInfo).then((result)=>{
        cb(result)
    })
}

const jobModify=(jobId,jobInfo,cb)=>{
    Job.update(jobId,{$set:jobInfo}).then((result)=>{
        cb(result)
    })
}

module.exports={
    jobSave,
    jobFind,
    jobDelete,
    jobModify
}
/*let formData=new FormData();
formData.append("jobName",jobName);
formData.append("jobSales",jobSales);
formData.append("jobMust",jobmust);
formData.append("comName",comName);
formData.append("id",picId);
formData.append("jobLogo",jobLogo[0].files[0]);
*/