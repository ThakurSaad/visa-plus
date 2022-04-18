import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  let errorElement;
  let displayLoading;
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    displayLoading = <Loading></Loading>;
  }
  if (error) {
    errorElement = (
      <p className="text-sm rounded-md bg-orange-100 text-red-700 my-3 mx-auto w-72 p-2">
        {error.message}
      </p>
    );
  }
  // submit btn handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  // reset btn handler
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("email sent");
    } else {
      toast("input your email");
    }
  };
  return (
    <section className="mt-20" id="login-form">
      {displayLoading}
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Your Email"
          type="email"
          name="email"
          id="email-login"
          required
        />
        <input
          ref={passwordRef}
          className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
          placeholder="Password"
          type="password"
          name="password"
          id="password-login"
          required
        />
        <input
          className="text-sm rounded-md block text-white bg-sky-900 my-1 mx-auto w-72 py-4"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-sm text-center text-sky-900 my-1">
        New to Visa Plus ?{" "}
        <Link className="text-blue-700" to="/register">
          Register
        </Link>
      </p>
      <button
        onClick={handleResetPassword}
        className="text-sm block mx-auto text-sky-900 my-1"
      >
        Forget Password ? <span className="text-blue-700">Reset</span>
      </button>
      {errorElement}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </section>
  );
};

export default Login;
