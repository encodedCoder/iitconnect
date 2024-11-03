// src/lib/axios.ts
import axios from "axios";

const api = axios.create({
  // For development, point to your backend server
  baseURL: "http://localhost:3000/api", // or your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
