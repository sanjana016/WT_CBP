import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <Navbar />
      <div className="aboutus">
        <h1>About Us</h1>
        <p style={{ fontWeight: "normal", color: "black" }}>
          Mafiosos is a community where all the sustainability entrepreneurs can
          connect to each other, share resources, help the community and much
          more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          dapibus velit vitae lorem congue, quis accumsan tortor sodales. Nam a
          tincidunt erat. Curabitur a libero consequat, blandit felis id,
          dapibus urna. Quisque non est feugiat, dignissim tellus at, elementum
          sem. In mattis mauris in elementum tincidunt. Cras feugiat malesuada
          tellus, eget feugiat justo ultricies sit amet. Nunc ut feugiat neque,
          eget pharetra mauris. Aliquam nec nunc ipsum. Nullam ornare nibh at
          lorem fringilla, sed vestibulum sem aliquam. Integer a arcu laoreet,
          ullamcorper sapien sit amet, ullamcorper justo. Maecenas vel dignissim
          justo. Vivamus egestas et quam non venenatis. Vivamus non massa in
          orci tempus dictum sit amet sagittis metus. Maecenas odio mauris,
          pellentesque quis nibh ut, malesuada pharetra ipsum. Aenean viverra
          suscipit ante et placerat. Fusce porta facilisis lobortis. Sed id
          lectus iaculis, ultricies justo volutpat, tristique lacus. Proin
          commodo placerat leo at tincidunt. Maecenas placerat, quam et
          condimentum egestas, elit augue gravida enim, et egestas mauris diam
          varius magna. Morbi id lacus posuere, efficitur massa in, varius
          tortor. Integer elementum eros justo, at interdum nisl ultricies quis.
          Donec at augue leo. Aenean vulputate metus eget venenatis finibus.
          Praesent sodales maximus sapien, et malesuada metus ultricies ac.
        </p>
      </div>
      <div>
        <br></br>
        <br></br>
        <span>
          <button
            className="logbth"
            style={{
              marginRight: "40px",
              background: "black",
              border: "none",
              color: "white",
              padding: "15px 32px",
              display: "inline-block",
              fontSize: "20px",
              borderRadius: "5px",
            }}
            onClick={() => {
              navigate("/Signup");
            }}
          >
            Sign Up!
          </button>

          <button
            className="logbtn"
            style={{
              background: "black",
              border: "none",
              color: "white",
              padding: "15px 32px",
              display: "inline-block",
              fontSize: "20px",
              borderRadius: "5px",
            }}
            onClick={() => {
              navigate("/Signin");
            }}
          >
            Sign In!
          </button>
        </span>
      </div>
    </div>
  );
};
export default Main;
