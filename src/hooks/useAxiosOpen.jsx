import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_ServerLink}`,
});

export const useAxiosOpen = () => {
  return AxiosInstance;
};
