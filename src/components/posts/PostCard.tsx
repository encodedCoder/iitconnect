// src/components/posts/PostCard.tsx
import React from "react";
import { Post } from "../../types/";
import { Button } from "../ui/Button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface PostCardProps {
  post: Post;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2">
            Posted by {post.authorId} •{" "}
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <p className="text-base mb-4">{post.content}</p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className="flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              {post.likes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onComment}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {post.comments}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
