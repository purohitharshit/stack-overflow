import React, { useState } from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import moment from "moment";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";

const UserProfile = () => {
  const [Switch, setSwitch] = useState(false);
  const { id } = useParams();
  //   console.log(id);
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0]; // it is the profile on which we have clicked
  const currentUser = useSelector((state) => state.currentUserReducer); // it is the user(our) profile
  //   console.log(users);
  console.log(currentUser);
  console.log(currentProfile);

  return (
    <div>
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                px="30px"
                py="15px"
                fontSize="40px"
                color="white"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
            </div>
            <div className="user-name">
              <h2>{currentProfile?.name}</h2>
              <div className="joined-on">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/carbon-copy/100/cake.png"
                  alt="cake"
                />
                Joined {moment(currentProfile.joinedOn).fromNow()} ago
              </div>
            </div>
          </div>
          <div className="edit-profile-btn">
            {currentUser?.result._id === id && (
              <button type="button" onClick={() => setSwitch(true)}>
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/material-outlined/24/pencil--v1.png"
                  alt="pencil--v1"
                />
                Edit profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
