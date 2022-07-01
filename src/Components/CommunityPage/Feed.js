import React from "react";
import logo from "../../assets/logo.jpeg";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

const Feed = (props) => {
  const { currUser } = props;

  return (
    <div>
      <Sidebar currUser={currUser} />
    </div>
  );
};

export default Feed;
