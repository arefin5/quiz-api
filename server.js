import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();
// db
mongoose
  .connect(process.env.DATABASE || `mongodb+srv://arefin:arefin@cluster0.xl4t5.mongodb.net/flip-cart?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR => ", err));

// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.get('/', (req, res) => {
  res.send('hello world')
});
app.use('/api/', require('./routes/auth'));
app.use('/api/', require('./routes/post'));
// readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));