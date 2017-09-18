import axios from 'axios';
import {AuthToken} from './AuthToken';

const API_ROOT = 'https://api.github.com/'
const api = axios.create({
  baseURL: process.env.URL_SERVER,
  headers: {'Content-Type': 'application/json'}
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers.Accept = 'application/json';
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  const { data, headers } = response;
  return response;
}, (error) => {
    return Promise.reject(error);
});


let store = createStore(
  reducers, //custom reducers
  applyMiddleware(
    axiosMiddleware(api), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
  )
)

export default api;
