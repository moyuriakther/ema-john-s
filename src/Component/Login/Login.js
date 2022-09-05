import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import google from "../../images/google.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  if (user) {
    navigate(from, { replace: true });
  }
  console.log(user);
  return (
    <div className="form-container d-flex justify-content-center mx-auto py-5">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label> <br />
            <input
              onBlur={handleBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label> <br />
            <input
              onBlur={handleBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>{" "}
          <p className="text-danger">{error?.message}</p>
          <br />
          <button type="submit form-button">Login</button>
          <p className="text-center">
            New to Ema-John?{" "}
            <Link className="form-link" to="/signup">
              Create New Account
            </Link>
          </p>
        </form>
        <div className="or-section text-center">
          <p className="or"></p>
          <p>Or</p>
          <p className="or"></p>
        </div>
        <button
          onClick={() => signInWithGoogle()}
          className="bg-light border border-dark"
        >
          <img className="google-icon" src={google} alt="" /> Continue With
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
