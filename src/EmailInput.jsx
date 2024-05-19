import React from "react";

const EmailInput = ({ email, onEmailChange }) => {
  return (
    <div className="form-group">
      <label>Email: </label>
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email address"
        required
      />
    </div>
  );
};

export default EmailInput;
