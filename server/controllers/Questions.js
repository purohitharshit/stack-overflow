import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const userId = req.userId;
  const postQuestion = new Questions(postQuestionData);
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
    // console.log("success");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new question");
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find();
    res.status(200).json(questionList);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params; // getting the id of the question from the URL
  //extracting the id property from the req.params object and assigning it to a new variable _id.
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }
  try {
    await Questions.findByIdAndDelete(_id);
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value } = req.body;
  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }

  try {
    const question = await Questions.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );
    // upVote and downVote is an array containing the userId's of user who had upvoted or downvoted
    // it checks for a particular question the 'id' of the user in the 'upVote' and 'downVote' array matches with the 'userId', that is the id of the user that sent a request

    if (value === "upVote") {
      //if user wants to upvote...we will check 3 conditions

      //if user has already downvoted
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }

      //if user has not voted yet
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        // if user already upvoted
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      //if user wants to downvote...we will check 3 conditions

      //if user has already upVoted
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }

      //if user has not voted yet
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        // if user already downvoted
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }
    await Questions.findByIdAndUpdate(_id, question); // we will update the 'question' details with the new "question" parameter
    res.status(200).json({ message: "Voted successfully" });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
    console.log(error);
  }
};
