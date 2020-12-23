import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="header">
      <nav>
        <p>Logo</p>
        <ul>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          {/* <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li> */}
        </ul>
      </nav>
    </main>
  );
};

export default Header;
