import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <section className="mt-20" id="signup-form">
        {/* {displayLoading} */}
        <form>
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Your Name"
            type="text"
            name="name"
            id="name-signup"
          />
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Your Email"
            type="email"
            name="email"
            id="email-signup"
          />
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Password"
            type="password"
            name="password"
            id="password-signup"
          />
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirm-password-signup"
          />
          <input
            className="text-sm border-none rounded-md text-white bg-rose-600 my-1 mx-auto block w-72 py-4"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p className="text-sm text-center mx-auto text-rose-600 my-1">
          Already have an account ?{" "}
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
        {/* {errorElement} */}
      </section>
    </div>
  );
};

export default Register;
