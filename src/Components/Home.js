import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./CommunityPage/Sidebar";

const Home = (props) => {
  const { currUser } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem("token"));
    if (!tokenData) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="home">
      {/* <Navbar /> */}
      <div className="home-container">
        <Sidebar currUser={currUser} />
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default Home;
