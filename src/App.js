import { BrowserRouter as Router, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Header from "./components/Header";
import UserContextProvider from "./context/UserContext";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <main className="app">
      <UserContextProvider>
        <Router>
          <Switch>
            <PublicRoute exact path="/">
              <Header />
              <Landing />
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
    </main>
  );
};

export default App;
