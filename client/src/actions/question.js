import React from "react";
import * as api from "../api/index";

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData); // this will call postQuestion() func inside api>index.js
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions());
    //after we post a new question and we are redirected to the home page...we will not see our posted question if we don't refresh the page.... until  we dispatch fetchAllQuestion()
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    // console.log(data);
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered,
      userId
    );
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

// export const voteQuestion = (id, value, userId) => async (dispatch) => {
//   try {
//     const { data } = api.voteQuestion(id, value, userId); //getting data from index.js
//     dispatch(fetchAllQuestions());
//   } catch (error) {
//     console.log(error);
//   }
// };

export const voteQuestion = (id, value) => async (dispatch) => {
  try {
    await api.voteQuestion(id, value);
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id);
    dispatch(fetchAllQuestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    const { data } = await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions()); // this is becoz after deleting particular 'ans'...the remaining questions will be displayed as it is by calling fetchAllQuestions() function
  } catch (error) {
    console.log(error);
  }
};
