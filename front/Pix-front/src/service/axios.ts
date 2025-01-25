import axios from "axios"
import { getCookie } from "@/utils/cookie";

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor for request (optional)

axiosInstance.interceptors.request.use(
  (config) => {
    // You can add a token or modify requests before they are sent
    const token = getCookie("uid");
    console.log("Token interceptado: " + token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
