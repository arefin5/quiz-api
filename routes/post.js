const  express =require("express")
const  {
    createQuestion,
    getAllQuestions,
    updateQuestion,
    deleteQuestion,
    totalPosts
}
=require ('../controllers/post');
const router = express.Router();



router.post("/create-question", createQuestion);
router.get("/get-all-posts",getAllQuestions );
router.get('/total-posts', totalPosts);
router.put("/update-question/:_id",updateQuestion)
router.delete("/delete-question/:_id", deleteQuestion);
module.exports = router;
