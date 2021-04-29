import axios from 'axios';

export const clientApi = axios.create({
  baseURL: '/',
  withCredentials: true,
});

export const setServerAccess = (token: string ) => {
  clientApi.defaults.headers.common['Authorization'] = '';
  delete clientApi.defaults.headers.common['Authorization'];
  if (token) {
    clientApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}