import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../../services/fireConfig";
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
  CartImage,
} from "./styled.js";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/cart.svg";

const Header = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { username } = userContext;
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropDownRef = useRef();

  const [guitarsInCart, setGuitarsInCart] = useState([]);

  const handleSignOut = () => {
    auth.signOut();
  };

  const handleDropDown = async () => {
    setOpenDropdown(!openDropdown);
    try {
      const response = await firestore
        .collection("carts")
        .where("userId", "==", auth.currentUser.uid)
        .get();
      const arrOfData = [];
      for (let doc of response.docs) {
        const data = doc.data();
        arrOfData.push(data);
      }
      setGuitarsInCart(arrOfData);
    } catch (err) {
      console.log("Error has occured", err);
    }
  };

  const handleInside = () => {
    setOpenDropdown(false);
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
              <Username onClick={handleDropDown}>{username}</Username>
              {openDropdown && (
                <Dropdown onClick={handleInside}>
                  <UlDropdown>
                    <Liprotected>{user.email}</Liprotected>
                    <Liprotected>
                      <Link to="/cart">
                        <div>
                          <CartImage src={Cart} alt="cart" />
                          <span>({guitarsInCart.length})</span>
                        </div>
                      </Link>
                    </Liprotected>
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
