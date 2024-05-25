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
  console.log("Email:", email);
  console.log("Password:", password);

  return (
    <div className="login-page">
      <Title />
      <p>Log In To Your Account</p>
      <form onSubmit={handlesubmit}>
        <EmailInput email={email} onEmailChange={handleEmailChange} /> <br />
        <PasswordInput
          password={password}
          onPasswordChange={handlePasswordChange}
        />
        <br />
        <SubmitButton />
      </form>
      <p>Not Registered?</p>
      <RegisterButton />
    </div>
  );
};

export default LoginPage;
