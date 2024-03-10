import express from "express";

import { AskQuestion, voteQuestion } from "../controllers/Questions.js";
import { getAllQuestions } from "../controllers/Questions.js";
import { deleteQuestion } from "../controllers/Questions.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/Ask", auth, AskQuestion); // if we want toask a question we must satisfy auth criteria
router.get("/get", getAllQuestions); // get request to retreive data from the database.....this request would be "localhost:3000/questions/get" from the 'index.js' file
router.delete("/delete/:id", auth, deleteQuestion);
router.patch("/vote/:id", auth, voteQuestion);

export default router;
