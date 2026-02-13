import axios from "axios";
import UseAuth from "./UseAuth";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_ServerLink}`,
});

export const useAxiosSecure = () => {

  const { currentUser } = UseAuth();

      AxiosInstance.interceptors.request.use((config) => {

            config.headers.authorization = `Bearer ${currentUser?.accessToken}`;

            return config;
      });

  return AxiosInstance;
};
