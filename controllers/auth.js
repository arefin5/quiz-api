const User=require('../model/user');
const jwt=require('jsonwebtoken');
const Teacher=require('../model/teacher');

const{ hashPassword, comparePassword } = require("../helpers/auth");
const { nanoid } = require("nanoid");
exports.register = async (req, res) => {
  //  console.log("REGISTER ENDPOINT => ", req.body);
  const { fname, email, password, lname ,rool,
    registrationCode,
    phone,
    year,
    blood,
    gender} = req.body;
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
  if(!rool){
    return res.json({
      error: "Role is required",
    });
  }

  if(!registrationCode){
    return res.json({
      error: "Registration Code is required",
    });
  }
  if(!phone){
    return res.json({
      error: "Phone is required",
    });
  }
  if(!year){
    return res.json({
      error: "Year is required",
    });
  }
  if(!blood){
    return res.json({
      error: "Blood is required",
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
   rool,
    registrationCode,
    phone,
    year,
    blood,
    gender
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
exports.teacherRegister = async (req, res) => {
   console.log("REGISTER ENDPOINT => ", req.body);
  const { fname, email, password, lname } = req.body;

  try {
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
  const exist = await Teacher.findOne({ email });
  if (exist) {
    return res.json({
      error: "Email is taken",
    });
  }

  // hash password
  const hashedPassword = await hashPassword(password);

  const teacher = new Teacher({
    fname,
    email,
    password: hashedPassword,
    lname,
    role: "Teacher",
  });
     teacher.save();
    // console.log("REGISTERED USE => ", user);
    return res.json({
      ok: true,
    });
  }
   catch (err) {
    console.log("REGISTER FAILED => ", err);
    return res.status(400).send("Error. Try again.");
  }
}
exports.teacherLogin = async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.json({
        error: "no user found",
      });
    }
    // check password
    const match = await comparePassword(password, teacher.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: teacher._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    teacher.password = undefined;
    res.json({
      token,
      user: teacher,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};
exports.SubmiteResult= async (req,res)=>{
    const {_id}=req.body;
    console.log(_id);


  try {
   
    const user = await User.findByIdAndUpdate(req.body._id, {
      $addToSet: { score: req.body.correct },
    });
    res.json(user)
    // console.log(user);
  }catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}