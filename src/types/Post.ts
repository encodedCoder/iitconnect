// src/types/Post.ts
export interface Post {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
}
