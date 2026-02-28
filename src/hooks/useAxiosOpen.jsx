import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "/api",
});

export const useAxiosOpen = () => {
  return AxiosInstance;
};
