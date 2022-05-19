const cors =require ("cors");
const mongoose =require("mongoose") 
const  express =require("express")
const multer =require("multer")
const router = express.Router();
const   {GridFsStorage} =require("multer-gridfs-storage")
const  Grid =require("gridfs-stream")
const path =require("path")
//
const morgan = require("morgan");
require("dotenv").config();

const app = express();
// grid:  mongose
const mongoURI =`mongodb+srv://tanzim:eqTU5b12AkE4TsER@cluster0.hpmu4.mongodb.net/quiz-app?retryWrites=true&w=majority`;
Grid.mongo = mongoose.mongo;

// db
mongoose
  .connect( `mongodb+srv://tanzim:eqTU5b12AkE4TsER@cluster0.hpmu4.mongodb.net/quiz-app?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR => ", err));
const conn = mongoose.createConnection(mongoURI)
// mongoose.connect(mongoURI)



//  mongoose.connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

let gfs;
conn.once("open", () => {
  // init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// const storage = new GridfsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString("hex") + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: "uploads",
//         };
//         resolve(fileInfo);
//       });
//   },
// });
var storage = new GridFsStorage({
  url: 'mongodb+srv://tanzim:eqTU5b12AkE4TsER@cluster0.hpmu4.mongodb.net/quiz-app?retryWrites=true&w=majority',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        const filename = `video-${Date.now()}${path.extname(file.originalname)}`;
                const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
  }
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      console.log("req.file", req);
       res.json({ file: req.file });
  // console.log( res.json({ file: req.file }));
});

// 
// var storage = new GridFsStorage({
//   url: 'mongodb+srv://arefin:arefin@cluster0.xl4t5.mongodb.net/flip-cart?retryWrites=true&w=majority',
//   fromData: (req, file) => {
//     return new Promise((resolve, reject) => {
//         const filename = `video-${Date.now()}${path.extname(file.originalname)}`;
//                 const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//   }
// });


// app.post("/api/upload", (req, res) => {

//   res.setHeader('Access-Control-Allow-Origin', '*');

//   res.send('cors problem fixed:)');


//   console.log("req.file", req);
  
// res.json({ file: req });
// console.log( res.json({ file: req }));
// });



  // 
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

// readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
