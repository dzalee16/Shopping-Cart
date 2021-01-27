import { BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import CartItem from "./pages/CartItem";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContextProvider from "./context/UserContext";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import BgImage from "./assets/images/string.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
  }

  body {
    background: linear-gradient( rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.7) ), url(${BgImage});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;
    font-family: "Oswald", sans-serif;
    color: white;
  }
`;

const App = () => {
  return (
    <UserContextProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <PublicRoute exact path="/">
            <Header />
            <Landing />
            <Footer />
          </PublicRoute>

          <PublicRoute exact path="/signin">
            <SignIn />
          </PublicRoute>

          <PublicRoute exact path="/signup">
            <SignUp />
          </PublicRoute>

          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>

          <ProtectedRoute exact path="/cart/:slug">
            <CartItem />
          </ProtectedRoute>

          <ProtectedRoute exact path="/cart">
            <Cart />
          </ProtectedRoute>
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
