import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/google.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "confirm-password") {
      setConfirmPassword(e.target.value);
    }
  };
  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Confirm Password Not Match");
      return;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
      setError("Password Should Contain At Least One Digit");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password Should Contain At Least One Special Character");
      return;
    }
    if (!/.{8,}/.test(password)) {
      setError("Password Length Should be At Least 8");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    setSuccess("User Created Successfully");
  };
  if (user) {
    navigate("/inventory");
  }
  return (
    <div className="form-container d-flex justify-content-center mx-auto py-5">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleSubmitSignUp}>
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
          <br />
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label> <br />
            <input
              onBlur={handleBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>{" "}
          {error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <p className="text-success">{success}</p>
          )}
          <br />
          <button type="submit form-button">Sign Up</button>
          <p className="text-center">
            Already Have an Account?{" "}
            <Link className="form-link" to="/login">
              Login
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

export default SignUp;
