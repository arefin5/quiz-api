const mongoose =require("mongoose") 
const { ObjectId } = mongoose.Schema;
const PostSchema = new mongoose.Schema({
   name:{
    //    required:true,
       type:String
   },
   roll:{
    type: String,
    // required: true,
    trim: true
   },
   classname:{
       Type:String,
   },
   mark:{
       type:Number,
       defult:0
   },
    catagory:{
         type:String,
            default:"mcq"
    },
   studentId:{
    type: ObjectId,
    ref: "User",
  },
},{ timestamps: true })

const Student =mongoose.model("Post",PostSchema );

module.exports=Student;