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
      default:0,
   },
    catagory:{
         type:String,
            default:"mcq"
    },
   studentId:{
    type: ObjectId,
    ref: "User",
  },
  image: {
    url: String,
    public_id: String,
  },
  
},{ timestamps: true })

const Student =mongoose.model("STUDENT",PostSchema );

module.exports=Student;