const  express =require("express")
const formidable =require("express-formidable")
const router = express.Router();

const  {
    studentRegister,
    getStudent,
    uploadStudentImage
} =require ("../controllers/student");

//     formidable({ maxFileSize: 5 * 1024 * 1024 }),

router.post("/create-student/", studentRegister);
router.post(
    "/upload-image",
    uploadStudentImage
  );

// router.get("/current-student", uploadStudentImage );

// router.get("/current-admin", isAdmin, currentUser);

module.exports = router;