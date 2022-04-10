import express from "express";

const router = express.Router();

// middleware
// import {  isAdmin } from "../middlewares";
// controllers
import {
  register,
  login,
  currentUser,
} from "../controllers/auth";


router.post("/register", register);
router.post("/login", login);
// router.get("/current-user",  currentUser);

// router.get("/current-admin", isAdmin, currentUser);


module.exports = router;
