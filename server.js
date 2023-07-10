const cors =require ("cors");
const  express =require("express")
const router = express.Router();
const path =require("path")
//
const morgan = require("morgan");
require("dotenv").config();
// mongodb://localhost:27017/quizapplication
const app = express();
const {connectDb}=require('./helpers/db')
connectDb();
// middlewares
app.use(express.json({ limit: "50mb" }));
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
app.use('/api/', require('./routes/student'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
