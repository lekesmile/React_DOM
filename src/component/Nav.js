import React from "react";

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h1>logo</h1>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
