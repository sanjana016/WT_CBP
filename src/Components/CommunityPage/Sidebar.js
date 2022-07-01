import React, { useState, useEffect } from "react";
import "../../styles/sidebar.scss";
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";
import apis from "../../api/index";

const Sidebar = (props) => {
  const { currUser } = props;

  const [feed, setFeed] = useState([]);

  const navigate = useNavigate();

  const handleSignOut = () => {
    // CALL SIGNOUT FUNCTION

    // CLEAR LOCALSTORAGE/TOKEN
    localStorage.clear();
    navigate("/signin");
  };

  function expand() {
    var element = document.getElementById("sidenav");
    element.classList.remove("is-collapsed");
  }

  function collapse() {
    var element = document.getElementById("sidenav");
    element.classList.add("is-collapsed");
  }

  function toggle() {
    var element = document.getElementById("sidenav");
    element.classList.toggle("is-collapsed");
  }

  const updateLikeFeed = async (postId) => {};

  const handleSearch = async (e) => {
    const searchBox = document.getElementById("search_box");
    if (searchBox) {
      const data = await apis.searchKeyword(searchBox.value.split(" "));
      console.log(data);
      setFeed(data.data.posts);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      const data = await apis.fetchFeed();
      setFeed(data.data.posts);
    };
    fetchAll();
  }, []);

  return (
    <div>
      <h2
        style={{
          marginBottom: "40px",
        }}
      >
        Here are the top picked resources for you!{" "}
      </h2>

      <div class="app">
        <div
          style={{
            padding: "30px",
            maxHeight: "1000px",
            overflow: "scroll",
          }}
        >
          {feed.map((fd, index) => (
            <Posts key={index} post={fd} updateLikeFeed={updateLikeFeed} />
          ))}
        </div>

        <div id="sidenav" class="sidenav">
          <header class="sidenav__header header">
            <span class="header__icon">
              <i class="fa fa-cube" aria-hidden="true"></i>
            </span>
            <span
              class="header__text"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Application
            </span>
            <button
              class="sidenav__button"
              aria-label="Expand"
              onClick={toggle}
            >
              <span class="sidenav__button-icon">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </span>
            </button>
          </header>

          <section class="search">
            <label class="search__icon" for="search">
              <i
                class="fa fa-search"
                aria-hidden="true"
                onClick={handleSearch}
              ></i>
              <span class="sr-only">Search</span>
            </label>
            <input
              id="search_box"
              type="text"
              class="search__input"
              placeholder="Search"
              onFocus={expand}
            />
          </section>

          <nav class="sidenav__nav nav">
            <ul class="nav__list">
              <li class="nav__item is-active">
                <button
                  class="nav__button"
                  onClick={() => {
                    navigate("/feed");
                  }}
                >
                  <span class="nav__icon">
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </span>
                  <span class="nav__label">Feed</span>
                </button>
              </li>
              <li class="nav__item is-active">
                <button
                  class="nav__button"
                  onClick={() => {
                    navigate("/profilePage");
                  }}
                >
                  <span class="nav__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </span>
                  <span class="nav__label">Profile</span>
                </button>
              </li>
              <li class="nav__item is-active">
                <button
                  class="nav__button"
                  onClick={() => {
                    navigate("/post/new");
                  }}
                >
                  <span class="nav__icon">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                  </span>
                  <span class="nav__label">Create New Post</span>
                </button>
              </li>
              <li class="nav__item is-active">
                <button class="nav__button">
                  <span class="nav__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-list-columns-reverse"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"
                      />
                    </svg>
                  </span>
                  <span class="nav__label">Leaderboard</span>
                </button>
              </li>
              <li class="nav__item">
                <button class="nav__button">
                  <span class="nav__icon">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                  </span>
                  <span class="nav__label">Chat</span>
                </button>
              </li>
            </ul>
            {/* <ul class="nav__list">
              <li class="nav__item">
                <button class="nav__button">
                  <span class="nav__icon">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                  </span>
                  <span class="nav__label">Notifications</span>
                </button>
              </li>
              <li class="nav__item">
                <button class="nav__button">
                  <span class="nav__icon">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                  </span>
                  <span class="nav__label">Chat</span>
                </button>
              </li>
              <li class="nav__item">
                <button class="nav__button">
                  <span class="nav__icon">
                    <i class="fa fa-sliders-h" aria-hidden="true"></i>
                  </span>
                  <span class="nav__label">Settings</span>
                </button>
              </li>
            </ul> */}
          </nav>

          <div class="sidenav__footer user">
            <button
              class="user__button"
              onClick={() => {
                navigate("/profilePage");
              }}
            >
              <div class="user__badge">
                <div class="user__image">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
              <div class="user__text">
                <span class="user__name">{`${
                  currUser
                    ? currUser.firstName + " " + currUser.lastName
                    : "John Smith"
                }`}</span>
                <span class="user__title">Web developer</span>
              </div>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={handleSignOut}
              style={{ marginTop: "20px" }}
            >
              Sign Out
            </button>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </div>
  );
};

export default Sidebar;
