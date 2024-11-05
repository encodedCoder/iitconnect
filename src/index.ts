// src/index.ts
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

export * from "./hooks";
