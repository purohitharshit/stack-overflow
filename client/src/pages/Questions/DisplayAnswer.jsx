import React from "react";
import moment from "moment";
import QuestionDetail from "./QuestionDetail";
import { Link, useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../actions/question";
const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
    //we will delete only the 'answer' field of 'question' from the database...instead of deleting the entire 'question'
    //Here 'id' is the id of question and 'answerId' is the id of the answer
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className="ans-body-detail">
          <p key={ans.id}>{ans.answerBody}</p>
          <div className="ans-body-detail-1">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>

            <div className="user-action-info">
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <div>
                <Link to={`/Users/${ans.userId}`} className="user-info">
                  <Avatar
                    backgroundColor="orange"
                    px="6px"
                    py="1px"
                    borderRadius="4px"
                  >
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <p>{ans.userAnswered}</p>
                </Link>
              </div>
            </div>
            <br />
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
