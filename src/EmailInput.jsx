import React from "react";
import ClearButton from "./ClearButton";

const EmailInput = ({ email, onEmailChange }) => {
  const handleClear = () => {
    onEmailChange({ target: { value: "" } });
  };

  return (
    <div className="form-group">
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email address"
      />
      {email && <ClearButton onClick={handleClear} />}
    </div>
  );
};

export default EmailInput;
