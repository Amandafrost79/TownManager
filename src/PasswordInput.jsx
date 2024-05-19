import React from "react";

const PasswordInput = ({ password, onPasswordChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="">Password: </label>
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        required
      />
    </div>
  );
};

export default PasswordInput;
