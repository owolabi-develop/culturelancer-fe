import axios from "axios";
import { ILoginData } from "../login/page";

export const cultureLancerAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

cultureLancerAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const LoginUser = async (data: ILoginData) => {
  return cultureLancerAxios.post("/login/", data);
};

export const GetUser = async (data: ILoginData) => {
  return cultureLancerAxios.post("/api/userdetail", data);
};
