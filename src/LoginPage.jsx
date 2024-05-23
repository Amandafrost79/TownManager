import React, { useState } from "react";
import Title from "./Title";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import RegisterButton from "./RegisterButton";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <Title />
      <p style={{ fontSize: 25, fontWeight: 600 }}>Log in to your account</p>
      <form onSubmit={handlesubmit}>
        <EmailInput email={email} onEmailChange={handleEmailChange} /> <br />
        <PasswordInput
          password={password}
          onPasswordChange={handlePasswordChange}
        />
        <br />
        <SubmitButton />
      </form>
      <p style={{ fontSize: 20, fontWeight: 500 }}>Not Registered?</p>
      <RegisterButton />
    </div>
  );
};

export default LoginPage;
