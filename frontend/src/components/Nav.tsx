import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";


const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to="/">Hjem</Link>
        <Link to="/kontakt">Kontakt oss</Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Nav;
