const mongoose =require("mongoose") 
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

const Post =mongoose.model("Post",PostSchema );

module.exports=Post;
