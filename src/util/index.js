import axios from "axios";

const api = axios.create({
  // baseURL: 'http://localhost:8000/api/v1', // Backend API URL
  baseURL: "https://hh-team5-back.onrender.com",
  withCredentials: true,
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
