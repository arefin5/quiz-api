const mongoose =require("mongoose") 

const { Schema } = mongoose;

const TeacherSchema = new Schema(
  {
    fname: {
      type: String,
      trim: true,
      required: true,
    },
    lname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    role: {
      type: String,
      default: "Subscriber",
    },
    Question: {
      type: Number,
      default:0,
  },
  salery: {
    type: Number,
    default:0,
  },
  
  },
  { timestamps: true }
);

const Teacher= mongoose.model("Teacher", TeacherSchema);
module.exports=Teacher