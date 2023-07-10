const User  = require("../model/user");
const expressJwt=require("express-jwt");

exports.requireSignin = expressJwt({
  secret:'shhhhhhared-secretshhhhhhared-secret',
  algorithms: ["HS256"],
});

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
