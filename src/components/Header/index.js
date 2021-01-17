import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {auth} from "../../services/fireConfig";
import {Navigation, GuitarLogo, Ul, Li, SignOutButton} from "./styled.js"
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const userContext = useContext(UserContext);
  const {user} = userContext;

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
              <Li>
                <SignOutButton onClick={handleSignOut}>SignOut</SignOutButton>
              </Li>
            </Ul>
          </Navigation>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Navigation>
            <GuitarLogo src={Logo} />
            <Ul>
              <Li>
                <Link to="/signin">SignIn</Link>
              </Li>
              <Li>
                <Link to="/signup">SignUp</Link>
              </Li>
            </Ul>
          </Navigation>
        </React.Fragment>
      )}
    </header> 
  );
};

export default Header;
