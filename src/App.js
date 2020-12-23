import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <main className="app">
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/signin">{/* <SignIn /> */}</Route>
        <Route path="/signup">{/* <SignUp /> */}</Route>
      </Router>
    </main>
  );
};

export default App;
