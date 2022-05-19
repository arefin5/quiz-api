const mongoose =require("mongoose") 

const { Schema } = mongoose;

const userSchema = new Schema(
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
    },score: {
      type: Number,
      default:0,
  },
  rool:{
    type:String,
  },
      registrationCode:{
        type:String,
      },
      phone:{
        type:String,
      },
      year:{
        type:String,
      },
      blood:{
        type:String,
      },
      gender:{
        type:String
      },

  blocked: {
    type: Boolean, default: false
}
  },
  { timestamps: true }
);

const User= mongoose.model("User", userSchema);
module.exports=User