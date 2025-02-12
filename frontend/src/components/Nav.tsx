import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div>
        <Link to="/">Hjem</Link>
        <Link to="/kontakt">Kontakt oss</Link>
      </div>
    </nav>
  );
};

export default Nav;
