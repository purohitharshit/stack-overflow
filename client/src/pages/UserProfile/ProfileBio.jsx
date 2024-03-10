import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div className="profile-bio">
        {currentProfile?.tags.length != 0 ? (
          <>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>Tags watched</p>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>

      <div>
        {currentProfile?.about ? (
          <>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>About</p>
            {currentProfile.about}
          </>
        ) : (
          <p>No Bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
