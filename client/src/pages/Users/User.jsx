import React from "react";
import { Link } from "react-router-dom";
import "./Users.css";

import "./Users.css";

const User = ({ user }) => {
  return (
    <div className="users-container">
      <Link to={`/Users/${user._id}`} className="user-profile-link">
        {/* <h5>{user._id}</h5> */}
        <div className="user-box">
          <h3 className="first-letter">{user.name.charAt(0).toUpperCase()}</h3>
          <h3>{user.name}</h3>
          {/* <h5>{user.joinedOn}</h5> */}
        </div>
        {/* <h5>{user.name}</h5>
      <h5>{user.email}</h5> */}
      </Link>
    </div>
  );
};

export default User;
