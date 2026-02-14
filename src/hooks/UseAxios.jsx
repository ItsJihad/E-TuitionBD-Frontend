import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ServerLink,
});

export const useAxiosSecure = () => {
  const { currentUser } = UseAuth();

  useEffect(() => {
    const requestInterceptor = AxiosInstance.interceptors.request.use(
      async (config) => {
        if (currentUser) {
          const token = await currentUser.getIdToken();
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      AxiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [currentUser]);

  return AxiosInstance;
};