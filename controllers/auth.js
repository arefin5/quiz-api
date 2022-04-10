const User=require('../model/user');
const jwt=require('jsonwebtoken');


const{ hashPassword, comparePassword } = require("../helpers/auth");
const { nanoid } = require("nanoid");


exports.register = async (req, res) => {
  //  console.log("REGISTER ENDPOINT => ", req.body);
  const { fname, email, password, lname } = req.body;
  // validation
  if (!fname) {
    return res.json({
      error: "Name is required",
    });
  }
  if (!password || password.length < 4) {
    return res.json({
      error: "Password is required and should be 6 characters long",
    });
  }
  if (! lname) {
    return res.json({
      error: "Last Name is required",
    });
  }
  const exist = await User.findOne({ email });
  if (exist) {
    return res.json({
      error: "Email is taken",
    });
  }
  // hash password
  const hashedPassword = await hashPassword(password);

  const user = new User({
    fname,
    email,
    password: hashedPassword,
   lname,
  });
  try {
    await user.save();
    // console.log("REGISTERED USE => ", user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("REGISTER FAILED => ", err);
    return res.status(400).send("Error. Try again.");
  }
};

exports.login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "no user found",
      });
    }
    // check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

exports.currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    // res.json(user);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
exports.Exam = async (req, res) => {
  try {
    const _id= req.params._id;
    console.log(_id);
    const user=await User.findById(_id);
  }catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

// $set: { isAdmin: true }





