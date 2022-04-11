const Student=require('../model/Student');



exports.studentRegister=async(req,res)=>{
    console.log("student","student")
    const {name,roll,classname,catagory,_id}=req.body;
    try{
          const student=new Student({name,roll,classname,studentId:_id})
          student.save()
          console.log("student",student)
          res.json(student)
    }
    catch(err){
        // console.log(err)
    }
}


exports.getStudent=async(req,res)=>{
    try{
        const student=await Student.find().populate('studentId',"name email _id");
        res.json(student);
    }catch(err){
        console.log(err)
    }
}



