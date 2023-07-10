const  express =require("express")

const router = express.Router();
const {isAdmin}=require("../middlewares/index")
// middleware
// import {  isAdmin } from "../middlewares";
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

router.get("/current-admin", isAdmin, currentUser);


module.exports = router;
