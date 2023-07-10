const  express =require("express")
const formidable =require("express-formidable")
const router = express.Router();
const  {
    studentRegister,
    getStudent,
    uploadStudentImage,
    examResult
} =require ("../controllers/student");

router.post("/create-student/", studentRegister);
router.post(
    "/upload-image",
    uploadStudentImage
  );

router.get("/get-all-student", getStudent );
router.put("/exam-result", examResult);

module.exports = router;