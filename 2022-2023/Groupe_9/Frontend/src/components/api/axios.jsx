import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/',
})

axiosInstance.interceptors.request.use((config) => {
  
    config.headers.Authorization = `Bearer USER_TOKEN`
    return config
})

export default axiosInstance
