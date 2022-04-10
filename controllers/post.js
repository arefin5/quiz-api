

const Question=require('../model/Question')


exports.createQuestion = async (req, res) => {
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
exports.getAllQuestions = async (req, res) => {
    const questions = await Question.find();
    res.json(questions)
}
