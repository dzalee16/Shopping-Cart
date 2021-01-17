import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {ReactComponent as Loader} from "../assets/spinner.svg"

const PublicRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const {user} = userContext;
  const {isLoading} = userContext;

  return (
  <Route {...rest}>
    {isLoading 
    ? <Loader/>
    : user
      ? <Redirect to="/home" /> 
      : children
    }
  </Route>
  );
};

export default PublicRoute;
