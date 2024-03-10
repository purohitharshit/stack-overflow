import React from "react";
import moment from "moment";
import QuestionList from "./QuestionList";
import { Link } from "react-router-dom";
import "./HomeMainbar.css";

const Questions = ({ question }) => {
  return (
    <div className="display-ques-container">
      <div className="display-votes">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>

      <div className="display-votes">
        <p>{question.noOfAnswers}</p>
        <p>Answers</p>
      </div>

      <div className="display-ques-details">
        <Link to={`/Questions/${question._id}`} className="question-title">
          {question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tags) => (
              <p key={tags}>{tags}</p>
            ))}
          </div>

          <div className="display-time">
            <p>asked {moment(question.askedOn).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
