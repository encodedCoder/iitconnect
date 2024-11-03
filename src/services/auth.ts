// src/services/auth.ts
import api from "../lib/axios";

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  token: string;
}

export const authService = {
  login: async (email: string, password: string) => {
    // For development/testing purposes
    console.log("Login attempt with:", { email, password });

    // Simulate API call for now
    // Remove this mock once you have a real backend
    if (email.endsWith("@iitrpr.ac.in")) {
      return {
        user: {
          id: "1",
          name: email.split("@")[0],
          email: email,
          avatar: null,
        },
        token: "mock-jwt-token",
      };
    }
    throw new Error("Invalid credentials");

    // Uncomment this when you have a real backend
    // const response = await api.post<LoginResponse>('/auth/login', {
    //   email,
    //   password,
    // });
    // return response.data;
  },
};
