import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apis from "../api";
import Navbar from "./Navbar";
import "../styles/sign.css";

const SignIn = (props) => {
  const {} = props;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email.length == 0 || password.length == 0) {
      return;
    }

    const response = await apis.signInUser({ email, password });
    console.log(response);

    if (response.status === 200) {
      const token = response.data.token;

      // STORE THE TOKEN IN LOCALSTORAGE
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(response.data.data));
      navigate("/");
    }
  };

  return (
    <>
      <div className="signin">
        <h1>Sign In Page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary" onClick={(e) => handleSignIn(e)}>
            Sign In
          </button>
        </form>
        <Link to={"/signup"}>New User? Sign Up</Link>
      </div>
    </>
  );
};

export default SignIn;
