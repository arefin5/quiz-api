const mongoose =require("mongoose") 

const { ObjectId } = mongoose.Schema;
const PostQuestionSchema = new mongoose.Schema({
    questionName: {
        type: String,
        required: true,
        trim: true
    },
    first:{
            type: String,
            //    required: true,
               trim: true
        },
    second:{
               type: String,
            //    required: true,
               trim: true
           },
    third:{
               type: String,
            //    required: true,
               trim: true
           },
    fourth:{
               type: String,
                // required: true,
                trim: true
           },
           answer:{
                type: String,
                // required: true,
                trim: true
           },
           category:{
                type: String,
           },
           incorrect_answer:[
                        {
                          
                            type: String
                       },
           ],
        postedBy: {
            type: ObjectId,
            ref: "Teacher",
        }
        
},{ timestamps: true })


const Question=mongoose.model("Question",PostQuestionSchema );
module.exports=Question;
