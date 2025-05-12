// src/utils/axios.js
import axios from "axios";

const authData = JSON.parse(localStorage.getItem("auth"));
const token = authData?.token;

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    Authorization: token ? `${token}` : "",
  },
});

export default instance;
