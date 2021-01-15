import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  "Content-Type": "application/json",
  // headers: {
  //   Authorization: `Bearer: ${localStorage.accessToken}`,
  // },
});

// interceptors... Request
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer: ${localStorage.accessToken}`,
  };
  return config;
});
// interceptors... Response

export const appAuthAxios = axiosInstance;
