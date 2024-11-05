// src/components/posts/CommentSection.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";

interface Comment {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: string;
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

export const CommentSection: React.FC<CommentSectionProps> = ({
  postId,
  comments,
}) => {
  const { register, handleSubmit, reset } = useForm<{ content: string }>();

  // const onSubmit = async (data: { content: string }) => {
  //   try {
  //     // API call to create comment would go here
  //     reset();
  //   } catch (error) {
  //     console.error("Failed to create comment:", error);
  //   }
  // };
  // Add postId usage or remove if not needed
  const onSubmit = async (data: { content: string }) => {
    try {
      // Use postId in API call
      console.log(`Creating comment for post ${postId}:`, data.content);
      reset();
    } catch (error) {
      console.error("Failed to create comment:", error);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <input
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Write a comment..."
          {...register("content", { required: true })}
        />
        <Button type="submit">Comment</Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar
              src={comment.authorAvatar}
              alt={comment.authorName}
              size="sm"
            />
            <div>
              <div className="bg-gray-100 rounded-lg px-3 py-2">
                <p className="font-medium text-sm">{comment.authorName}</p>
                <p className="text-sm">{comment.content}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
