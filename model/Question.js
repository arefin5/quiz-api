import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const PostQuestionSchema = new mongoose.Schema({
    questionName: {
        type: String,
        required: true,
        trim: true
    },
        first:{
            type: String,
               required: true,
               trim: true
        },
           second:{
               type: String,
               required: true,
               trim: true
           },
           third:{
               type: String,
               required: true,
               trim: true
           },
           fourth:{
               type: String,
                required: true,
                trim: true
           }
},{ timestamps: true })


export default mongoose.model("Question",PostQuestionSchema );
