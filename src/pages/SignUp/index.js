import React, { useState } from "react";
import { auth } from "../../services/fireConfig";
import {Content, Form} from "./styled.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // firebase auth function
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log(cred.user);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <Content>
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit} className="signup-Form">
        <label htmlFor="email">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <br/>
        <label htmlFor="password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br/>
        <button type="submit">SignUp</button>
      </Form>
    </Content>
  );
};

export default SignUp;
