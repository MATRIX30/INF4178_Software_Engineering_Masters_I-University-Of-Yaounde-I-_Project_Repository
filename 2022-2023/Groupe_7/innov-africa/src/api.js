import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const API_URL = "http://127.0.0.1:8000/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const mytoken = localStorage.getItem("token");

// ====== login ======
export const login = (username, password) => {
  return api.post("login/", {
    username: username,
    password: password,
  });
};

// ======== log out ========
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentuser");
};

// ======= sgn up ======
export const signup = (body) => {
  return axios.post(`${API_URL}add/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${mytoken}`,
    },
  });
};

// ======= update ======
export const update = (body, id) => {
  return axios.patch(`${API_URL}update/${id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${mytoken}`,
    },
  });
};

// =========== reset pwd ===========
export const resetPassword = (email) => {
  return api.post("reset-pwd/get/", { email: email });
};
export const newPassword = (username, password) => {
  return api.post("reset-pwd/", { username: username, password: password });
};

// ======= get user =========
export const getUser = (token) => {
  return axios.get(`${API_URL}get-user/`, {
    headers: { Authorization: `Token ${token}` },
  });
};

// ======== get profiles ===========
export const getProfiles = () => {
  return axios.get(`${API_URL}profiles-display/`, {
    headers: { Authorization: `Token ${mytoken}` },
  });
};

// add a project
export const createPost = (body) => {
  return axios.post(`${API_URL}projects/`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// get projects
export const getProjects = () => {
  return axios.get(`${API_URL}projects-display/`);
  // return axios.get(`${API_URL}projects/`);
};
