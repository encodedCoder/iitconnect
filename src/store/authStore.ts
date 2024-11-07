// src/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "../services/auth";

interface AuthState {
  user: any | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,
      login: async (email: string, password: string) => {
        try {
          set({ loading: true, error: null });
          const response = await authService.login(email, password);
          set({
            user: response.user,
            token: response.token,
            loading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Login failed",
            loading: false,
          });
          throw error;
        }
      },
      logout: () => {
        set({ user: null, token: null, error: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
