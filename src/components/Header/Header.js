import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav className="grid grid-cols-1 justify-items-center md:flex md:justify-between md:items-center text-sm">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="md:pr-4 grid grid-cols-1 md:flex md:items-center">
        <Link className="font-semibold mx-4" to="/blogs">
          Blogs
        </Link>
        <Link className="font-semibold mx-4" to="/aboutme">
          About Me
        </Link>
        <Link className="font-semibold mx-4" to="/login">
          Login
        </Link>
        <Link className="font-semibold mx-4" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
