import React, { useState } from "react";
import moment from "moment";
import { useLocation, useParams } from "react-router-dom";
import upVote from "../../assets/sort-up.svg";
import downVote from "../../assets/sort-down.svg";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import "./Questions.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteQuestion,
  postAnswer,
  voteQuestion,
} from "../../actions/question";
import { useNavigate } from "react-router-dom";
import copy from "copy-to-clipboard";

const QuestionDetail = () => {
  const { id } = useParams();

  const questionsList = useSelector((state) => state.questionsReducer);
  const User = useSelector((state) => state.currentUserReducer);
  console.log(User);

  const [Answer, setAnswer] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Please login or signup to post a answer");
      navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Please enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
      setAnswer("");
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    console.log("delte pressed");
    console.log(User.result._id);
    dispatch(deleteQuestion(id, navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  // var questionsList = [
  //   {
  //     id: "1",
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
  //         userAnswered: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  //   {
  //     id: "2",
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
  //         userAnswered: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  //   {
  //     id: "3",
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
  //         userAnswered: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  //   {
  //     id: "4",
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
  //         userAnswered: "Harshit",
  //         answeredOn: "jan 2",
  //         userId: 2,
  //       },
  //     ],
  //     askedOn: "Jan1",
  //   },
  // ];

  return (
    <>
      <div className="answer-detail-page">
        {questionsList.data === null ? (
          <h1>Loading</h1>
        ) : (
          <>
            {questionsList.data
              .filter((question) => question._id === id)
              .map((question) => (
                <div key={question._id}>
                  <section className="ques-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="ques-details-container-2">
                      <div className="net-votes">
                        <img
                          src={upVote}
                          alt="Up Votes"
                          width="18"
                          onClick={handleUpVote}
                        />
                        <p>
                          {question.upVote.length - question.downVote.length}
                        </p>
                        <img
                          src={downVote}
                          alt="Down Votes"
                          width="18"
                          onClick={handleDownVote}
                        />
                      </div>

                      <div className="ques-details-container-3">
                        <p>{question.questionBody}</p>
                        <div className="question-details-tags">
                          {question.questionTags.map((tag) => (
                            <p key={tag}>{tag}</p>
                          ))}
                        </div>

                        <div className="user-action-question">
                          <div>
                            <button type="button" onClick={handleShare}>
                              Share
                            </button>
                            {User?.result?._id === question?.userId && (
                              <button type="button" onClick={handleDelete}>
                                Delete
                              </button>
                            )}
                          </div>

                          <div className="user-action-info">
                            <p>asked on {moment(question.askedOn).fromNow()}</p>
                            <div>
                              <Link
                                to={`/Users/${question.userId}`}
                                className="user-info"
                              >
                                <Avatar
                                  backgroundColor="orange"
                                  px="6px"
                                  py="1px"
                                  borderRadius="4px"
                                >
                                  {question.userPosted.charAt(0).toUpperCase()}
                                </Avatar>
                                <p>{question.userPosted}</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {question.noOfAnswers !== 0 && (
                    <section>
                      <h3>{question.noOfAnswers} Answers</h3>
                      <DisplayAnswer
                        question={question}
                        handleShare={handleShare}
                      />
                    </section>
                  )}

                  <section className="ans-post-container">
                    <h3>Your Answer</h3>
                    <form
                      onSubmit={(e) => {
                        handlePostAnswer(e, question.answer.length);
                      }}
                    >
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={Answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      ></textarea>
                      <input
                        type="submit"
                        className="post-answer-btn"
                        value="Post Your Answer"
                      />
                    </form>
                    <p>
                      Browse other questions tagged
                      {question.questionTags.map((tag) => (
                        <Link
                          to="/Tags"
                          className="related-ques-tags"
                          key={tag}
                        >
                          {tag}
                        </Link>
                      ))}
                      or
                      <Link to="/AskQuestion" className="ask-own-ques">
                        Ask your own question
                      </Link>
                    </p>
                  </section>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default QuestionDetail;
