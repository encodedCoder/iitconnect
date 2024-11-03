// src/components/posts/PostList.tsx
import React from "react";
import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

// Mock data for demonstration
const MOCK_POSTS = [
  {
    id: "1",
    content: "Just finished my project presentation! 🎉",
    author: {
      name: "John Doe",
      avatar: null,
    },
    likes: 12,
    comments: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    content:
      "Anyone interested in joining the coding club? We're having a meetup this weekend! 💻",
    author: {
      name: "Jane Smith",
      avatar: null,
    },
    likes: 8,
    comments: 5,
    createdAt: new Date().toISOString(),
  },
];

export const PostList: React.FC = () => {
  return (
    <div className="space-y-4">
      {MOCK_POSTS.map((post) => (
        <Card key={post.id} className="p-6">
          <div className="flex items-start gap-4">
            <Avatar alt={post.author.name} src={post.author.avatar} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{post.author.name}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-2">{post.content}</p>
              <div className="flex items-center gap-4 mt-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
