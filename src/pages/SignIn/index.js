import React, { useState } from "react";
import { auth } from "../../services/fireConfig";

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
    <main className="signin">
      <h1>SignIn Page</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
    </main>
  );
};

export default SignIn;
