import React from "react";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import "./LeftSidebar.css";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };
  const slideOutStyle = {
    tranform: "translateX(-100%)",
  };
  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink
            to="/"
            className="side-nav-links"
            exact
            activeClassName="active"
          >
            <p>Home</p>
          </NavLink>
        </button>

        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
            <button onClick={() => handleSlideIn()} className="nav-btn">
              <NavLink
                to="/Questions"
                className="side-nav-links"
                exact
                activeClassName="active"
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img src={Globe} alt="globe" />
                  <p style={{ paddingLeft: "10px" }}>Questions</p>
                </div>
              </NavLink>
            </button>

            <button onClick={() => handleSlideIn()} className="nav-btn">
              <NavLink
                to="/tags"
                className="side-nav-links"
                exact
                activeClassName="active"
              >
                <p style={{ paddingLeft: "2rem" }}>Tags</p>
              </NavLink>
            </button>

            <button onClick={() => handleSlideIn()} className="nav-btn">
              <NavLink
                to="/users"
                className="side-nav-links"
                activeClassName="active"
              >
                <p style={{ paddingLeft: "2rem" }}>Users</p>
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
