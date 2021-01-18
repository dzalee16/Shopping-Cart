import { BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContextProvider from "./context/UserContext";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import BgImage from "./assets/images/string.jpg";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Shadows+Into+Light&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient( rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.7) ), url(${BgImage});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
    font-family: "Courgette", cursive;
    color: white;
  }
`

const App = () => {
  return (
    <UserContextProvider>
      <GlobalStyle/>
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
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
