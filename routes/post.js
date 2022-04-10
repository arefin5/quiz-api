import express from "express";
import formidable from "express-formidable";

import {
    createQuestion,
    getAllQuestions
}
from '../controllers/post';
const router = express.Router();

router.post("/create-question", createQuestion);
router.get("/get-all-posts",getAllQuestions );

module.exports = router;
