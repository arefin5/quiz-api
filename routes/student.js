const  express =require("express")

const router = express.Router();


const  {
    studentRegister,
    getStudent,
} =require ("../controllers/student");


router.post("/create-student/", studentRegister);


router.get("/current-student", getStudent );

// router.get("/current-admin", isAdmin, currentUser);


module.exports = router;