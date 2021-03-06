import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ReactComponent as Loader } from "../assets/spinner.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpinnerLoader } from "./styled.js";

const ProtectedRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { isLoading } = userContext;

  return (
    <Route {...rest}>
      {isLoading ? (
        <SpinnerLoader>
          <Loader />
        </SpinnerLoader>
      ) : user ? (
        <React.Fragment>
          <Header />
          {children}
          <Footer />
        </React.Fragment>
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};

export default ProtectedRoute;
