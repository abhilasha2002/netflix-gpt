import React, { useState, useRef } from "react";
import Header from "./Header";
import "../App.css";
import isValid from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };
  const handleButtonClick = () => {
    //Validate form data
    const message = isValid(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);

    //Sign in/sign up
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user loged in',user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
          alt="netflix-login-image"
        />
      </div>
      <form className="bg-[rgba(0,0,0,0.8)] bg-opacity-50 absolute w-4/12 p-10 text-white my-22 mx-[35%] rounded ">
        <h1 className="my-4 font-[700] text-3xl ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-2 border-1 border-white rounded w-full text-white"
            placeholder="Full Name"
            type="text"
            ref={nameRef}
          />
        )}
        <input
          className="p-4 my-2 border-1 border-white rounded w-full text-white"
          ref={emailRef}
          placeholder="Email address"
          type="text"
        />
        <input
          className="p-4 my-2 border-1 border-white rounded w-full text-white"
          ref={passwordRef}
          placeholder="Password"
          type="password"
        />
        <p className="mb-2 pb-2 text-red-700 ">{errMessage}</p>
        <button
          className="p-2 my-2 bg-[rgb(229,9,20)] text-white font-bold w-full rounded"
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick();
          }}
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        {isSignIn && (
          <>
            <p className="my-2 text-center">OR</p>
            <button className="p-2 my-2 bg-[rgba(128,128,128,0.4)] text-white font-bold w-full rounded">
              Use a sign-in code
            </button>
            <p className="my-2 text-center underline">
              <a>Forgot password?</a>
            </p>
          </>
        )}
        <p className="my-2 py-2">
          {isSignIn ? "New to Netflix?" : "Already registered?"}
          <span
            className="font-[500] cursor-pointer hover:underline"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now" : "Sign in Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
