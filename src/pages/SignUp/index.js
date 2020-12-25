import React, { useState } from "react";
import { auth } from "../../services/fireConfig";

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
    <main className="signup">
      <h1>SignUp Page</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="email">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="signup-password"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br />
        <button type="submit">SignUp</button>
      </form>
    </main>
  );
};

export default SignUp;
