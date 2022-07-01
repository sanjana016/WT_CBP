import React from "react";

import "../styles/Content.css";
import Post from "./Post";

const POSTS = [
  {
    name: "example",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    likes: 66,
  },
  {
    name: "example",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    likes: 66,
  },
  {
    name: "example",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    likes: 66,
  },
  {
    name: "example",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    likes: 66,
  },
];

const Content = (props) => {
  const {} = props;

  return (
    <div className="content">
      {POSTS.map((post, index) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Content;
