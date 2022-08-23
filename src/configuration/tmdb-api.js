import axios from 'axios';
import { API_URL } from '../utils/constants';

const APIGateway = axios.create({
  baseURL: API_URL,
  params: {
    // eslint-disable-next-line no-undef
    // api_key: process.env.REACT_APP_API_KEY
    api_key: '2071d391774826fe0fa07a2215d3dadb'
  },
  headers: {
    'Content-type': 'application/json'
  }
});

const requestInterceptor = (config) => {
  // const token = localStorage.getItem('token');
  // if(token) {
  //   config.headers['Authorization'] = `${TYPE_TOKEN} ${token}`;
  // }
  return config;
};

const responseInterceptor = (response) => {
  return response.data;
};

APIGateway.interceptors.request.use(requestInterceptor);
APIGateway.interceptors.response.use(responseInterceptor);

export default APIGateway;
