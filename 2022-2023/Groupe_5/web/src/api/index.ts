import axios from "axios";

export const instance = axios.create({
    baseURL:"http://localhost:3333",
    withCredentials: true,
    timeout: 10000
})