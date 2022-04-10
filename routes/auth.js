const  express =require("express")

const router = express.Router();

// middleware
// import {  isAdmin } from "../middlewares";
// controllers
const  {
  register,
  login,
  currentUser,
} =require ("../controllers/auth");


router.post("/register", register);
router.post("/login", login);
// router.get("/current-user",  currentUser);

// router.get("/current-admin", isAdmin, currentUser);


module.exports = router;
