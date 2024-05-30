import React, { useState } from "react";
import AvatarUpload from "./AvatarUpload";
import "./AvatarUpload.css";
import Title from "./Title";

const HomePage = () => {
  const [name, setName] = useState("Amanda");
  return (
    <div className="home-page">
      <Title />
      <AvatarUpload name={name} />
    </div>
  );
};

export default HomePage;
