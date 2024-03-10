import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";
import "./HomeMainbar.css";
import { useSelector } from "react-redux";

const HomeMainbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = 1;

  const questionsList = useSelector((state) => state.questionsReducer);
  console.log(questionsList);

  // var questionsList = [
  //   {
  //     id: 1,
  //     upVotes: 2,
  //     downVotes: 1,
  //     votes: 3,
  //     noOfAnswers: 3,
  //     QuestionTitle: "Hello World",
  //     QuestionBody: "kjvfvnr nenf jwe wnwej nfj we ewnfjwf wjnf ",
  //     QuestionTags: ["java", "css", "html"],
  //     userPosted: "ABC",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswerd: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  //   {
  //     id: 2,
  //     upVotes: 2,
  //     downVotes: 1,
  //     votes: 3,
  //     noOfAnswers: 3,
  //     QuestionTitle: "Hello World",
  //     QuestionBody: "kjvfvnr nenf jwe wnwej nfj we ewnfjwf wjnf ",
  //     QuestionTags: ["java", "css", "html"],
  //     userPosted: "ABC",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswerd: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  //   {
  //     id: 3,
  //     upVotes: 2,
  //     downVotes: 1,
  //     votes: 3,
  //     noOfAnswers: 3,
  //     QuestionTitle: "Hello World",
  //     QuestionBody: "kjvfvnr nenf jwe wnwej nfj we ewnfjwf wjnf ",
  //     QuestionTags: ["java", "css", "html"],
  //     userPosted: "ABC",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswerd: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  //   {
  //     id: 4,
  //     upVotes: 2,
  //     downVotes: 1,
  //     votes: 3,
  //     noOfAnswers: 3,
  //     QuestionTitle: "Hello World",
  //     QuestionBody: "kjvfvnr nenf jwe wnwej nfj we ewnfjwf wjnf ",
  //     QuestionTags: ["java", "css", "html"],
  //     userPosted: "ABC",
  //     userId: 1,
  //     answer: [
  //       {
  //         answerBody: "answer",
  //         userAnswerd: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  // ];

  const checkAuth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button onClick={checkAuth} className="ask-ques">
          Ask Questions
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading... </h1>
        ) : (
          <>
            <p>{questionsList.data.length}</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
