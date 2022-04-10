// import Post from "../models/post";
const User =require( "../model/user");
const post  = require("../model/post");
const Question =require( "../model/question");
const expressJwt=require("express-jwt");
// import expressJwt from "express-jwt";

exports.requireSignin = expressJwt({
  secret:'shhhhhhared-secretshhhhhhared-secret',
  algorithms: ["HS256"],
});

// exports.canEditDeletePost = async (req, res, next) => {
//   try {
//     const question = await Question.findById(req.params._id);
//     // console.log("POST in EDITDELETE MIDDLEWARE => ", post);
//       next();
//   } catch (err) {
//     console.log(err);
//   }
// };

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // console.log("isAdmin ===> ", user);
    if (user.role !== "Admin") {
      return res.status(400).send("Unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
