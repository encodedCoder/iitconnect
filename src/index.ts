// src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Post {
  id: string;
  content: string;
  authorId: string;
  createdAt: string;
  likes: number;
  comments: number;
}

// src/store/authStore.ts
import create from "zustand";

interface AuthState {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));

// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// src/hooks/useAuth.ts
import { useAuthStore } from "../store/authStore";
import api from "../services/api";

export const useAuth = () => {
  const { setUser, setToken, logout } = useAuthStore();

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await api.post("/auth/register", {
        email,
        password,
        name,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { login, register, logout };
};

// src/components/ui/Button.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "border border-slate-200 hover:bg-slate-100",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
