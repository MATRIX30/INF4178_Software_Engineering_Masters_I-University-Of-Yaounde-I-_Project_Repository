import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.43.123:3333',
  timeout: 1000,
})
