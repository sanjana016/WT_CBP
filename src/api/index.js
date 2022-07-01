import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const signUpUser = (userData) => {
  return api.post("/user/signup", userData);
};

export const signInUser = (userData) => {
  return api.post("/user/login", userData);
};

export const getAllData = () => {
  const data = api.get("/user/all");
  return data;
};

export const publishPost = (postData) => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  return axios.post("http://localhost:8080/api/post/addPost", postData);
};

export const updateCoins = (coins) => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  // return axios.put(`http://localhost:8080/api/user/update/coins/`, null, {
  //   params: { coins: coins },
  // });
  return axios.put(
    `http://localhost:8080/api/user/update/coins/${coins}`,
    null
  );
};

export const updateRatings = (ratings) => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  // return axios.put(`http://localhost:8080/api/user/update/coins/`, null, {
  //   params: { coins: coins },
  // });
  return axios.put(
    `http://localhost:8080/api/user/update/rating/${ratings}`,
    null
  );
};

export const fetchFeed = () => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  return axios.get(`http://localhost:8080/api/post/view/all`);
};

export const fetchUserPosts = (userId) => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  return axios.get(`http://localhost:8080/api/post/view/user/${userId}`);
};

export const searchKeyword = (keywords) => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  return axios.post(`http://localhost:8080/api/search`, { keywords });
};

export const fetchUser = (userId) => {
  axios.defaults.headers.common = {
    "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
  };
  return axios.get(`http://localhost:8080/api/user/view/user/${userId}`);
};

const apis = {
  signUpUser,
  signInUser,
  getAllData,
  publishPost,
  updateCoins,
  fetchFeed,
  fetchUserPosts,
  searchKeyword,
  fetchUser,
  updateRatings,
};

export default apis;
