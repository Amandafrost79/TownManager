import React from "react";
import ClearButton from "./ClearButton";

const PasswordInput = ({ password, onPasswordChange }) => {
  const handleClear = () => {
    onPasswordChange({ target: { value: "" } });
  };

  return (
    <div className="form-group">
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      {password && <ClearButton onClick={handleClear} />}
    </div>
  );
};

export default PasswordInput;
