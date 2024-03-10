import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";
import { useLocation } from "react-router-dom";

const Users = ({ slideIn, handleSlideIn }) => {
  const location = useLocation();
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <h1>Users</h1>
        {/* {location.pathname === "/Users" ? <UsersList /> : <></>} */}
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
