import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_BACKEND_URL,
  // baseURL: process.env.REACT_APP_BACKEND_URL, // for CRA
  withCredentials: true, // if you use cookies or JWT tokens
});

export default api;
