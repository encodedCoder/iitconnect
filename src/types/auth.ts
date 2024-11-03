// src/types/auth.ts
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  role: "user" | "admin";
  createdAt: string;
}
