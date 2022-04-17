import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

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
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="rounded-md font-semibold bg-sky-900 text-white py-2 px-4 mx-4"
          >
            Sign Out
          </button>
        ) : (
          <div>
            <Link className="font-semibold mx-4" to="/login">
              Login
            </Link>
            <Link
              className="rounded-md font-semibold bg-sky-900 text-white py-2 px-4 mx-4"
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
