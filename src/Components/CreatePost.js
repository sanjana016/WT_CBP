import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../api";

const CreatePost = (props) => {
  const { currUser } = props;

  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handlePublishPost = async (e) => {
    e.preventDefault();
    // PUBLISH A POST
    await apis.publishPost({
      ...post,
      user: currUser._id,
    });

    // AWARD COINS
    const data = await apis.updateCoins(10);
    // localStorage.setItem("user", JSON.stringify(data.data.data));

    // AWARD COINS
    const data2 = await apis.updateRatings(2);
    localStorage.setItem("user", JSON.stringify(data2.data.data));

    navigate("/profilePage");
  };

  return (
    <div className="">
      <h1
        style={{
          margin: "20px 60px",
        }}
      >
        Create a New Post
      </h1>
      <form>
        <div
          class="form-group"
          style={{
            marginBottom: "20px",
          }}
        >
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="name@example.com"
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />
        </div>
        <div
          class="form-group"
          style={{
            marginBottom: "20px",
          }}
        >
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            rows="3"
            onChange={(e) => {
              setPost({ ...post, content: e.target.value });
            }}
          ></textarea>
        </div>
        <button class="btn btn-primary" onClick={(e) => handlePublishPost(e)}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
