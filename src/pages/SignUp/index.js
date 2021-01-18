import React, { useState } from "react";
import { auth, firestore } from "../../services/fireConfig";
import {Content, Form, ErrorMessage} from "./styled.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (true) {
      case (password !== confirmPassword):
        setErrorMessage("Incorect password!!!");
        break;
      case (/\s/g.test(password)):
        setErrorMessage("Password can't have whitespaces!!!");
        break;
      case (/\s/g.test(email)):
        setErrorMessage("Email can't have whitespaces!!!");
        break;
      case (/\s/g.test(username)):
        setErrorMessage("Username can't have witespaces!!!");
        break;
      default:
        const data = {
          username: username
        }
        // firebase auth function
        auth.createUserWithEmailAndPassword(email, password)
          .then((cred) => {
            return firestore.collection("users").doc(cred.user.uid)
            .set(data);
          })
          .then(() => {
            console.log(`Created user with username: ${username}`);
          })
          .catch((err) => {
            console.log("Error" + err);
          });
        setEmail("");
        setPassword("");
        setUsername("");
        setConfirmPassword("");
    }
  };

  return (
    <Content>
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit} className="signup-Form">
      <label htmlFor="username">Username</label>
        <input
          id="signup-username"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <label htmlFor="password">Confirm password</label>
        <input
          id="signup-confirm-password"
          type="password"
          placeholder="Confirm password..."
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <button type="submit">SignUp</button>
      </Form>
    </Content>
  );
};

export default SignUp;
