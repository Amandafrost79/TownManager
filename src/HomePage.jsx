import React, { useState } from "react";
import AvatarUpload from "./AvatarUpload";
import "./AvatarUpload.css";
import Footer from "./Footer";

const HomePage = () => {
  const [name, setName] = useState("Amanda");
  return (
    <div className="home-page">
      <AvatarUpload name={name} />
    </div>
  );
};

export default HomePage;
