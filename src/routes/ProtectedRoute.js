import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";

const ProtectedRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const {user} = userContext;

  return (
    <Route {...rest}>
     {user
     ? <>
      <Header />
      {children}
      </>
     : <Redirect to="/" />
     }
    </Route>
  );
};

export default ProtectedRoute;
