import React from "react";
import "./ClearButton.css";

const ClearButton = ({ onClick }) => {
  return (
    <button className="clear-button" onClick={onClick}>
      &#10006;
    </button>
  );
};

export default ClearButton;
