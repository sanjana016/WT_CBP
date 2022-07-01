import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sign.css";

import apis from "../api";
import Navbar from "./Navbar";

const SignUp = (props) => {
  const {} = props;

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState([]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      interests,
      coins: 0,
      rating: 0,
      linkedin: "",
      bio: "",
    };
    const response = await apis.signUpUser(userData);
    // console.log(response);

    if (response.status === 201) {
      const token = response.data.token;

      // STORE THE TOKEN IN LOCALSTORAGE
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(response.data.data));
      navigate("/");
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <h3>Sign Up Page</h3>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
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
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue=""
            onChange={(e) => {
              setInterests([...interests, e.target.value]);
            }}
          >
            <option value="">select interests</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
          <div>
            {interests.map((interest, index) => (
              <span key={index} style={{ marginRight: "12px" }}>
                {interest}
              </span>
            ))}
          </div>
        </div>
        <button className="btn btn-dark" onClick={handleSignUp}>
          Submit
        </button>
        <br></br>
        <Link to={"/signin"}>Already a user? Sign In</Link>
      </form>
    </div>
  );
};

export default SignUp;
