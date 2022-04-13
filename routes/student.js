const  express =require("express")

const router = express.Router();


const  {
    studentRegister,
    getStudent,
    uploadStudentImage
} =require ("../controllers/student");


router.post("/create-student/", studentRegister);
router.post("/upload-image",uploadStudentImage)


// router.get("/current-student", uploadStudentImage );

// router.get("/current-admin", isAdmin, currentUser);

module.exports = router;