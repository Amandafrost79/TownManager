import React, { useState } from "react";

const AvatarUpload = ({ name }) => {
  const [avatar, setAvatar] = useState(null);

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

  return (
    <div className="avatar-upload">
      <h2>How can I assist you today, {name}?</h2>
      <div className="avatar-container">
        {avatar ? (
          <img src={avatar} alt="User Avatar" className="avatar" />
        ) : (
          <div className="placeholder-avatar">Upload Avatar</div>
        )}
      </div>
      <input type="file" accept="image/*" onChange={handleAvatarChange} />
    </div>
  );
};

export default AvatarUpload;
