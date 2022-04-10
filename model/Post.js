import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String,
      },
      price:{
        type: Number,
        required: true,
      }
},{ timestamps: true })

export default mongoose.model("Post",PostSchema );
