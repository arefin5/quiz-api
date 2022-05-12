const Student=require('../model/Student');

const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.studentRegister=async(req,res)=>{
    // console.log("student",req.body._id)
    const {name,roll,classname,catagory,_id}=req.body;

    try{
          const student=new Student({name,roll,classname,studentId:_id,mark:0})
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
        .populate('mark',"mark")
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
// put result:
exports.examResult=async(req,res)=>{
    try {
        const {correct,_id}=req.body;
        const student = await Student.updateOne({_id: _id}, {$set:{mark:req.body.correct}})
        // const student = await Student.findByIdAndUpdate(
        //   {_id :req.body._id},
        //   {
        //     $push: { mark:req.body.correct },
        //   },
        //   { new: true }
        // );
        res.json(student);
        console.log("student",student)
      } catch (err) {
        console.log(err);
      }

}
// 