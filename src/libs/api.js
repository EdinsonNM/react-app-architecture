/* eslint no-param-reassign: 0 */
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const api = axios.create({
    baseURL: process.env.URL_SERVER,
    headers: { 'Content-Type': 'application/json' }
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    config.headers.Accept = 'application/json';

    return config;
}, error => Promise.reject(error));

// Add a response interceptor
api.interceptors.response.use(response => response, error => Promise.reject(error));

// axios middleware
export const AxiosMiddleware = axiosMiddleware(api);
export const Api = api;
