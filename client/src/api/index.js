import axios from "axios";

const API = axios.create({
  baseURL: "https://stack-overflow-8wca.onrender.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

// export const logIn = (authData) => API.post("/users/login", authData);

// export const signUp = (authData) => API.post("/users/signup", authData);

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);

export const getAllQuestions = () => API.get("/questions/get");

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });

export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers }); // second paramater is the body the API request

export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const getAllUsers = () => API.get("/user/getAllUsers");
// no parameter becoz it is a get request

export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

// export const updateProfile = (id, updateData) =>
//   API.patch(`/user/update/${id}`, updateData);
