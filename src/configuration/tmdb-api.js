import axios from "axios";

const TYPE_TOKEN = 'bearer';
const BASE_URL = 'https://api.themoviedb.org/3/'
const APIGateway = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

const requestInterceptor = (config) => {
  // const token = localStorage.getItem('token');
  // if(token) {
  //   config.headers['Authorization'] = `${TYPE_TOKEN} ${token}`;
  // }
  return config;
}

const responseInterceptor = (response) => {
  return response.data
}

APIGateway.interceptors.request.use(requestInterceptor);
APIGateway.interceptors.response.use(responseInterceptor);


export default APIGateway;
