const  express =require("express")

const router = express.Router();
// controllers
const  {
  register,
  login,
  currentUser,
  teacherRegister,
  teacherLogin,
  Exam,
  SubmiteResult
} =require ("../controllers/auth");


router.post("/register", register);
router.post("/login", login);
router.get("/exam/:_id",Exam)
router.post("/teacher-register", teacherRegister);
router.post("/teacher-login", teacherLogin);
router.put("/submite-result",SubmiteResult)
// router.get("/current-user",  requireSignin,currentUser);
module.exports = router;
