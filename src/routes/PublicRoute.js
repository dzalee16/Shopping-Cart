import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const {user} = userContext;

  return (
  <Route {...rest}>
    {user 
      ? <Redirect to="/home" /> 
      : children
      }
  </Route>
  );
};

export default PublicRoute;
