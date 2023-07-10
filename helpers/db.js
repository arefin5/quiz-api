const mongoose = require("mongoose");

exports.connectDb = async () => {
  try {
    await mongoose.connect(`mongodb+srv://arefintalukder5:lThUqvkGuE7tS2kY@cluster0.olirils.mongodb.net/`, {
      dbName: "quiz-app",
    });

    mongoose.connection.once("open", () => {
      console.log("MongoDB Connection Successfully Opened");
      // Additional code to run when the connection is open
    });

    console.log("MongoDB Connection Successful");
  } catch (err) {
    console.error(err);
  }
};