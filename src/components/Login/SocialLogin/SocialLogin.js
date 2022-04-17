import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = (
      <p className="text-sm rounded-md bg-orange-100 text-red-700 absolute left-0 right-0 my-3 mx-auto w-72 p-2">
        {error.message}
      </p>
    );
  }
  if (user) {
    navigate("/");
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <section>
      <button
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center text-sm font-semibold rounded-md bg-stone-200 block mx-auto my-4 w-72 py-2"
      >
        <img className="mr-2" src={google} alt="" />
        Google Sign In
      </button>
      {errorElement}
    </section>
  );
};

export default SocialLogin;
