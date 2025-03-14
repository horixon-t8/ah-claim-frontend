import axios from 'axios';
import Cookies from 'js-cookie';

// NOTE: change base URL API
const baseURL = 'http://localhost:3000/api/';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async config => {
  const accessToken = Cookies.get('access_token');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// for unauthorized requests
instance.interceptors.response.use(
  response => response,
  async error => {
    if (error?.response?.status === 401) {
      try {
        // NOTE case 1: refresh token is valid
        const refreshToken = Cookies.get('refresh_token');
        const { data } = await axios.post(`${baseURL}auth/refresh-token`, {
          refresh_token: refreshToken,
        });
        Cookies.set('access_token', data.access_token);
        Cookies.set('refresh_token', data.refresh_token);
        // NOTE set new access token
        error.config.headers.Authorization = `Bearer ${data.access_token}`;
        return await axios.request(error.config); // NOTE retry the request
      } catch {
        // if (error?.response?.status !== 401) {
        //   return Promise.reject(error);
        // }

        // NOTE case 2: refresh token is expired
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        window.location.href = '/authentication';
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
