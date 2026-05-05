import axios from "axios";

export const axiosInstance = axios.create({
 HEAD
    baseURL: "http://localhost:4590/api",
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
})