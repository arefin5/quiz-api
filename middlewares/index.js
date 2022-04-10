// import Post from "../models/post";
import User from "../model/user";
// import expressJwt from "express-jwt";

// export const requireSignin = expressJwt({
//   secret:'shhhhhhared-secretshhhhhhared-secret',
//   algorithms: ["HS256"],
// });

// export const canEditDeletePost = async (req, res, next) => {
//   try {
//     const post = await Post.findById(req.params._id);
//     // console.log("POST in EDITDELETE MIDDLEWARE => ", post);
//     if (req.user._id != post.postedBy) {
//       return res.status(400).send("Unauthorized");
//     } else {
//       next();
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

export const isAdmin = async (req, res, next) => {
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
