import mongoose from "mongoose";
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
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
