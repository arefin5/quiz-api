const  express =require("express")

const router = express.Router();

// middleware
// import {  isAdmin } from "../middlewares";
// controllers
const  {
  register,
  login,
  currentUser,
  Exam
} =require ("../controllers/auth");

// const {requireSignin} =require ("../middlewares");

router.post("/register", register);
router.post("/login", login);
router.get("/exam/:_id",Exam)
// router.get("/current-user",  requireSignin,currentUser);

// router.get("/current-admin", isAdmin, currentUser);


module.exports = router;
