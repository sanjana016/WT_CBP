import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-removebg.png";
import "../styles/sign.css";
import Home from "./Home";

import "../styles/Navbar.css";

const Navbar = (props) => {
  const {} = props;

  const navigate = useNavigate();

  const handleSignOut = () => {
    // CALL SIGNOUT FUNCTION

    // CLEAR LOCALSTORAGE/TOKEN
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="navbar-nav mr-auto">
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" />
          <span>
            <img src={logo} alt="" width="50" height="50" class="logo" />
            <div style={{ color: "white" }}> T-Share </div>
          </span>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
