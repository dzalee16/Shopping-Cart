import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {auth} from "../../services/fireConfig";
import { UserContext } from "../../context/UserContext";
import {Navigation, GuitarLogo, Ul, Lipublic, Liprotected, Username, SignOut} from "./styled.js"
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const userContext = useContext(UserContext);
  const {user} = userContext;
  const {username} = userContext;

  const handleSignOut = () => {
    auth.signOut();
  }

  return (
    <header>
      {user ? (
        <React.Fragment>
          <Navigation>
            <GuitarLogo src={Logo} />
            <Ul>
              <Liprotected>
                <Username>Username: {username}</Username>
              </Liprotected>
              <Liprotected onClick={handleSignOut}>
                <SignOut>
                  SignOut
                </SignOut>
              </Liprotected>
            </Ul>
          </Navigation>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Navigation>
            <GuitarLogo src={Logo} />
            <Ul>
              <Lipublic>
                <Link to="/signin">SignIn</Link>
              </Lipublic>
              <Lipublic>
                <Link to="/signup">SignUp</Link>
              </Lipublic>
            </Ul>
          </Navigation>
        </React.Fragment>
      )}
    </header> 
  );
};

export default Header;
