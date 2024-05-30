import React, { useState } from "react";
import "./AvatarUpload.css";
import OptionsCard from "./OptionsCard";

const AvatarUpload = ({ name }) => {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = React.createRef();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="avatar-upload">
      <div className="avatar-and-greeting">
        <div className="avatar-container">
          {avatar ? (
            <img src={avatar} alt="User Avatar" className="avatar" />
          ) : (
            <div className="placeholder-avatar">Upload Avatar</div>
          )}
        </div>
        <div className="greeting">
          <h2>
            <span className="name">{name}</span> , how can I assist you today?
          </h2>
        </div>
      </div>

      <button className="upload-button" onClick={handleButtonClick}>
        Upload Avatar
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleAvatarChange}
        className="hidden-file-input"
      />
      {/* <input type="file" accept="image/*" onChange={handleAvatarChange} /> */}
      <OptionsCard />
    </div>
  );
};

export default AvatarUpload;
