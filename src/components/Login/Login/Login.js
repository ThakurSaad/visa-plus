import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="mt-20" id="login-form">
      {/* {displayLoading} */}

      <form>
        <input
          // ref={emailRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Your Email"
          type="email"
          name="email"
          id="email-login"
        />
        <input
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Password"
          type="password"
          name="password"
          id="password-login"
        />
        <input
          className="text-sm rounded-md block text-white bg-sky-900 my-1 mx-auto w-72 py-4"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-sm text-center text-sky-900 my-1">
        New to VisaPlus ?{" "}
        <Link className="text-blue-700" to="/register">
          Register
        </Link>
      </p>
      <button
        // onClick={handleResetPassword}
        className="text-sm block mx-auto text-sky-900 my-1"
      >
        Forget Password ? <span className="text-blue-700">Reset</span>
      </button>
      {/* {errorElement} */}
      {/* <ToastContainer /> */}
    </section>
  );
};

export default Login;
