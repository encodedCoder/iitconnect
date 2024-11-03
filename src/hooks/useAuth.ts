// src/hooks/useAuth.ts
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    user,
    token,
    loading,
    error,
    login: storeLogin,
    register: storeRegister,
    logout: storeLogout,
    updateProfile,
  } = useAuthStore();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        await storeLogin(email, password);
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    [storeLogin, navigate]
  );

  const register = useCallback(
    async (email: string, password: string, name: string) => {
      try {
        await storeRegister(email, password, name);
        navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error);
        throw error;
      }
    },
    [storeRegister, navigate]
  );

  const logout = useCallback(() => {
    storeLogout();
    navigate("/login");
  }, [storeLogout, navigate]);

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!user && !!token,
    login,
    register,
    logout,
    updateProfile,
  };
};
