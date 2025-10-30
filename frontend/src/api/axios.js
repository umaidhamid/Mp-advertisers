import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // for Vite
  // baseURL: process.env.REACT_APP_BACKEND_URL, // for CRA
  withCredentials: true, // if you use cookies or JWT tokens
});

export default api;
