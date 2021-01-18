import React, { useState } from "react";
import { auth } from "../../services/fireConfig";
import {Content, Form} from "./styled.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {})
      .catch((err) => {
        console.log("User are not signIn" + err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <Content>
      <h1>SignIn</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit">SignIn</button>
      </Form>
    </Content>
  );
};

export default SignIn;
