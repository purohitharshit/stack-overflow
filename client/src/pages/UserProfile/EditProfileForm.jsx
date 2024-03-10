import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  console.log(tags);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      alert("Update tags field");
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public information</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Display name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About me</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input
            type="text"
            id="tags"
            className="input-tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value="Save profile" className="user-submit-btn" />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateProfile } from "../../actions/users";
// import "./UserProfile.css";

// const EditProfileForm = ({ currentUser, setSwitch }) => {
//   const [name, setName] = useState(currentUser?.result?.name);
//   const [about, setAbout] = useState(currentUser?.result?.about);
//   const [tags, setTags] = useState([]);
//   console.log(currentUser);
//   console.log(tags);

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (tags[0] === "" || tags.length === 0) {
//       alert("Update tags field");
//     } else {
//       dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
//     }
//     setSwitch(false);
//   };

//   return (
//     <div>
//       <h2 className="title-1">Edit your profile</h2>
//       <h2 className="title-2">Public Informatiom</h2>

//       <form onSubmit={handleSubmit} className="edit-form">
//         <label htmlFor="name">
//           <h3>Display name</h3>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>

//         <label htmlFor="about">
//           <h3>About me</h3>
//           <textarea
//             name="about"
//             value={about}
//             id="about"
//             cols="30"
//             rows="10"
//             onChange={(e) => setAbout(e.target.value)}
//           ></textarea>
//         </label>

//         <label htmlFor="tags">
//           <h3>Watched Tags</h3>
//           <p>Add tags separated by commas</p>
//           <input
//             type="text"
//             onChange={(e) => setTags(e.target.value.split(" "))}
//           />
//         </label>
//         <br />
//         <input
//           type="button"
//           value="Save Profile"
//           className="user-profile-submit"
//         />
//         <button type="button" onClick={() => setSwitch(false)}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfileForm;
