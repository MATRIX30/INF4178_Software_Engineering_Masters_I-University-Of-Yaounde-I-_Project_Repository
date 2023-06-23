import axios from "axios";
const axiosInstance = axios;


axiosInstance.interceptors.request.use((req) => {
  req.headers.authorization = localStorage.getItem('token') 
    ? "Bearer " + localStorage.getItem('token')
    : "";
  return req;
});
 
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = "/login";
    }
    throw err;
  }
);

export default axiosInstance;
