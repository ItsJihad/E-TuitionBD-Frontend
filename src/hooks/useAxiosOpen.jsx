import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_ServerLink}/api`,
});

export const useAxiosOpen = () => {
  return AxiosInstance;
};
