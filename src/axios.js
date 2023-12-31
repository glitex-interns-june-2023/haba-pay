import axios from "axios";

// const baseURL = "http://localhost:3002"; 
const baseURL = "https://habaapi.glitexsolutions.co.ke"; 

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance