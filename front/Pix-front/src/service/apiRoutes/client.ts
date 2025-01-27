import axiosInstance from "../axios";
import { ClientDataSignIn, ClientDataSignUp } from "@/types/client_types";
import { PixData } from "@/types/pix_types";

// User Auth
const handleLogin = (data: ClientDataSignIn) => {
  return axiosInstance.post(`/users/login`, data);
};

const handleRegister = (data: ClientDataSignUp) => {
  return axiosInstance.post("/users", data);
};

const handleLogout = () => {
  return axiosInstance.get("/api/user/logout");
};

const getReceivedPix = (id: number) => {
  return axiosInstance.get(`/users/pix/receive/${id}`);
};

const getUserPix = (id: number) => {
  return axiosInstance.get(`/users/pix/${id}`);
};

const getSendPix = (id: number) => {
  return axiosInstance.get(`/users/pix/send/${id}`);
};

const handleCreatePix = (data: any) => {
  return axiosInstance.post("/users/pix", data);
};




export { handleLogin, handleRegister, handleLogout, handleCreatePix, getReceivedPix, getSendPix, getUserPix };
