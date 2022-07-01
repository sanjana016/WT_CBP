import React, { useEffect, useState } from "react";
import apis from "../../api";
import Posts from "./Posts";

const ProfilePage = (props) => {
  const { user } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const data = await apis.fetchUserPosts(user._id);
      setPosts(data.data.posts);
    };
    if (user) {
      fetchUserPosts();
    }
  }, [user]);

  return (
    <div style={{ textAlign: "left" }}>
      <div class="card" style={{ maxWidth: "800px" }}>
        <h5 class="card-header" style={{ textAlign: "center" }}>
          {user && user.firstName + " " + user.lastName}'s Profile
        </h5>
        {user && (
          <div class="card-body">
            <h3 class="card-title">{user.firstName + " " + user.lastName}</h3>
            <p class="card-text">
              {user.bio.length > 0
                ? user.bio
                : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <h4>Role: {user.role}</h4>
                <div>{user.email}</div>
                <p>Last updated on {new Date(user.updatedAt).toUTCString()}</p>
                <div>Coins: {user.coins}</div>
                <div>Rating: {user.rating}</div>
                <div>
                  <h6 style={{ marginBottom: "20px" }}>Interests</h6>
                  {user.interests.map((interest, index) => (
                    <span
                      style={{
                        borderRadius: "12px",
                        background: "#bcdcf1",
                        padding: "6px 12px",
                        margin: "4px",
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="/feed"
                class="btn btn-primary"
                style={{
                  float: "right",
                }}
              >
                Go to Feed
              </a>
            </div>

            <br></br>

            {posts.map((post, index) => (
              <Posts key={index} post={post} onlyDisplay={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
