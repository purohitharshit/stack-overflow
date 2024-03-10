import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./AllRoutes";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question.js";
import { fetchAllUsers } from "./actions/users.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    //fetchAllQuestions has no arguements as it is just a get request
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(true);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;
