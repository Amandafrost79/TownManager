import React from "react";
import "./LoginPage.css";

const ClearButton = ({ onClick }) => {
  return (
    <button className="clear-button" onClick={onClick}>
      &#10006;
    </button>
  );
};

export default ClearButton;
