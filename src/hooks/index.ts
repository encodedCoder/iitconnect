// src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  bio?: string;
  avatar?: string;
  followersCount: number;
  followingCount: number;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  likes: number;
  comments: number;
  createdAt: string;
  liked: boolean;
}

export interface PostListProps {
  userId?: string;
  type?: "all" | "user";
}
