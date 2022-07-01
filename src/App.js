import { Routes, Route, useSearchParams } from "react-router-dom";
import Main from "./Components/Main.js";
import Navbar from "./Components/Navbar.js";
import Profile from "./Components/Profile.js";
import Feed from "./Components/CommunityPage/Feed.js";

import "./App.css";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Posts from "./Components/CommunityPage/Posts.js";
import { useEffect, useState } from "react";
import CreatePost from "./Components/CreatePost.js";
import ProfilePage from "./Components/CommunityPage/ProfilePage.js";
import ProfilePageOther from "./Components/CommunityPage/ProfilePageOther.js";

function App() {
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      setCurrUser(user);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            localStorage.getItem("token") !== null ? (
              <Home currUser={currUser} />
            ) : (
              <Main />
            )
          }
        />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route
          exact
          path="/profile-creation"
          element={<Profile currUser={currUser} />}
        />
        <Route exact path="/feed" element={<Feed currUser={currUser} />} />
        <Route exact path="/post" element={<Posts currUser={currUser} />} />
        <Route
          exact
          path="/post/new"
          element={<CreatePost currUser={currUser} />}
        />
        <Route
          exact
          path="/profilePage"
          element={<ProfilePage user={currUser} />}
        />
        <Route exact path="/profilePage/:id" element={<ProfilePageOther />} />
      </Routes>
    </div>
  );
}

export default App;
