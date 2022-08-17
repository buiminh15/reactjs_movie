import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/'
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
