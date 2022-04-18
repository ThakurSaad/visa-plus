import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className="grid grid-cols-1 bg-violet-100 justify-items-center md:flex md:justify-between md:items-center text-sm pb-8 lg:pb-0">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="md:pr-4 grid justify-items-center grid-cols-1 gap-y-4 md:flex md:items-center">
        <CustomLink className="font-semibold mx-8" to="/blogs">
          Blogs
        </CustomLink>
        <CustomLink className="font-semibold mx-8" to="/aboutme">
          About Me
        </CustomLink>
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="rounded-md font-semibold bg-sky-900 text-white py-2 px-4 mx-4"
          >
            Sign Out
          </button>
        ) : (
          <div className="grid grid-cols-1  gap-y-4 items-center justify-items-center md:grid-cols-2">
            <CustomLink className="font-semibold mx-4" to="/login">
              Login
            </CustomLink>
            <CustomLink
              className="rounded-md font-semibold bg-sky-900 text-white py-2 px-4 mx-4 md:mb-0"
              to="/register"
            >
              Register
            </CustomLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
