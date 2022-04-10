const  express =require("express")
const  {
    createQuestion,
    getAllQuestions
}
=require ('../controllers/post');
const router = express.Router();

router.post("/create-question", createQuestion);
router.get("/get-all-posts",getAllQuestions );

module.exports = router;
