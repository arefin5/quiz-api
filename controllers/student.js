const Student=require('../model/Student');

const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.studentRegister=async(req,res)=>{
    console.log("student","student")
    const {name,roll,classname,catagory,_id}=req.body;
    try{
          const student=new Student({name,roll,classname,studentId:_id})
          student.save()
          // console.log("student",student)
          res.json(student)
    }
    catch(err){
        // console.log(err)
    }
}
exports.getStudent=async(req,res)=>{
    try{
        const student=await Student.find().populate('studentId',"name email _id")
        .populate('mark',"mark").select('name roll classname catagory mark')
        res.json(student);
    }catch(err){
        console.log(err)
    }
}

exports.uploadStudentImage = async (req, res) => {
    // console.log("req files => ", req.body);
    // const {blob}=req.body;
    console.log("req files => ",req.body)
  };
