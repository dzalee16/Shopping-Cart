import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/fireConfig";
import { UserContext } from "../../context/UserContext";
import {
  Navigation,
  GuitarLogo,
  Ul,
  Lipublic,
  UlDropdown,
  Liprotected,
  Username,
  Container,
  Dropdown,
} from "./styled.js";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { username } = userContext;
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropDownRef = useRef();

  const handleSignOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", handleOutside);

    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [setOpenDropdown, dropDownRef]);

  return (
    <header>
      {user ? (
        <React.Fragment>
          <Navigation>
            <Link to="/home">
              <GuitarLogo src={Logo} />
            </Link>
            <Container ref={dropDownRef}>
              <Username onClick={() => setOpenDropdown(!openDropdown)}>
                {username}
              </Username>
              {openDropdown && (
                <Dropdown>
                  <UlDropdown>
                    <Liprotected>{user.email}</Liprotected>
                    <Liprotected>Your Cart</Liprotected>
                    <Liprotected onClick={handleSignOut}>SignOut</Liprotected>
                  </UlDropdown>
                </Dropdown>
              )}
            </Container>
          </Navigation>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Navigation>
            <Link to="/home">
              <GuitarLogo src={Logo} />
            </Link>
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
