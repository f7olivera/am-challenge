import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.request.use(
  (request) => {
    const jwt = localStorage.getItem("auth-token");

    if (jwt) {
      request.headers["Authorization"] = `Bearer ${jwt}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
