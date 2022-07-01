import React from "react";

import "../styles/Post.css";

const Post = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <h3>{post.name}</h3>
      <p>{post.desc}</p>
      <div>{post.likes}</div>
    </div>
  );
};

export default Post;
