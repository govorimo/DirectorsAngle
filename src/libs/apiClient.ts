import axios from 'axios';

import {BASE_URL} from '../constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          console.error('Internal server error, please try again later.');
          break;
        default:
          console.error('An error occurred:', error.response.status);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
