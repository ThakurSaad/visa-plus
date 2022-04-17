import React from "react";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [user1, loading1, error1] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      alert("type confirm password carefully");
    }
  };
  return (
    <div>
      <section className="mt-20" id="register-form">
        {displayLoading}
        <form onSubmit={handleSubmit}>
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Your Name"
            type="text"
            name="name"
            id="name-register"
            required
          />
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Your Email"
            type="email"
            name="email"
            id="email-register"
            required
          />
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Password"
            type="password"
            name="password"
            id="password-register"
            required
          />
          <input
            className="text-sm border-none rounded-md bg-gray-100 block my-3 mx-auto w-72 py-4 pl-3"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirm-password-register"
            required
          />
          <input
            className="text-sm border-none rounded-md text-white bg-sky-900 my-1 mx-auto block w-72 py-4"
            type="submit"
            value="Register"
          />
        </form>
        <p className="text-sm text-center mx-auto text-sky-900 my-1">
          Already have an account ?{" "}
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
        {errorElement}
      </section>
    </div>
  );
};

export default Register;
