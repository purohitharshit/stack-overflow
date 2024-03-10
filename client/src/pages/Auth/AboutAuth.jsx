import React from "react";
import logo from "../../assets/logo.png";
import "./Auth.css";

const AboutAuth = () => {
  return (
    <div className="auth-container-1">
      <img src={logo} alt="image" />
      <h4>Get unstuck - ask a question!</h4>
      <h4>Save your favorite posts, tags and filters</h4>
      <h4>Answer questions and earn reputation</h4>
      <p style={{ color: "#666767", fontSize: "13px" }}>
        Collaborate and share knowledge with a private group for FREE.
      </p>
      <p style={{ color: "#007ac6", fontSize: "13px" }}>
        Get Stack Overflow for Teams free for up to 50 users.{" "}
      </p>
    </div>
  );
};

export default AboutAuth;
