import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {auth} from "../../services/fireConfig";

const Header = () => {
  const userContext = useContext(UserContext);
  const {user} = userContext;

  const handleSignOut = () => {
    auth.signOut();
  }

  return (
    <main className="header">
      {user ? (
        <React.Fragment>
          <nav>
            <p>Logo</p>
            <ul>
              <li>
                <button onClick={handleSignOut}>SignOut</button>
              </li>
            </ul>
          </nav>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <nav>
            <p>Logo</p>
            <ul>
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </ul>
          </nav>
        </React.Fragment>
      )}
    </main>
  );
};

export default Header;
