// api/axios.ts
import axios from "axios";
import { BASE_URL } from "../utils/config";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const adminToken = localStorage.getItem("adminToken"); // ✅ safely access here
//   if (adminToken) {
//     config.headers.Authorization = `Bearer ${adminToken}`;
//   }
//   return config;
// });

export default api;
