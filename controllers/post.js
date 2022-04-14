

const Question=require('../model/Question')


exports.createQuestion = async (req, res) => {
    const { questionName, first,second,third,fourth,answer ,} = req.body;
    // console.log(req.body);
    try{
        const question = await Question.create(req.body);
        question.save();
        res.json({ok:true});
    }catch(err){
        console.log(err);
    }
}
exports.getAllQuestions = async (req, res) => {
    const questions = await Question.find() .sort({ createdAt: -1 }).limit(20)
    res.json(questions)
    // console.log(questions)
}

exports.updateQuestion = async (req, res) => {
    // console.log("post update controller => ", req.params._id );
    // console.log("post delete controller => ", req.params._id);
    console.log(req.body);

    const { questionName, first,second,third,fourth } = req.body;

    try {
      const question = await Question.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.json(question);
    } catch (err) {
      console.log(err);
    }
  }



  


    exports.deleteQuestion = async (req, res) => {
        // console.log("post delete controller => ", req.params._id);
    
        const _id = req.params._id;
        try {
            const question = await Question.findByIdAndDelete({_id});
            res.json(question);
        } catch (err) {
            console.log(err);
    }
}


exports.totalPosts = async (req, res) => {
  try {
    const total = await Question.find().estimatedDocumentCount();
    res.json(total);
  } catch (err) {
    console.log(err);
  }
};