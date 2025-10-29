import axios from "axios";

const api = axios.create({
  baseURL: "https://mp-advertisers.vercel.app/",
  withCredentials: true,
});

export default api;
