import Post from '../model/post';
import Question from '../model/Question';
export const createPost = (req, res) => {
    console.log(req.body);
    res.json({
        message: "Post created successfully"
    })
}
export const getAllPosts = (req, res) => {
    res.send('hello world');
}
export const createQuestion = async (req, res) => {
    const { questionName, first,second,third,fourth } = req.body;
    console.log(req.body);
    try{
        const question = await Question.create({
            questionName,
          first,
          second,
          third,
          fourth
        });
        question.save();
        res.json({ok:true});
    }catch(err){
        console.log(err);
    }
}
export const getAllQuestions = async (req, res) => {
    const questions = await Question.find();
    res.json(questions)
}
