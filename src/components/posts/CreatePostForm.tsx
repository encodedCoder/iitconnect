// src/components/posts/CreatePostForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
// import { useAuthStore } from "../../store/authStore";

interface CreatePostFormData {
  content: string;
}

export const CreatePostForm: React.FC = () => {
  // const user = useAuthStore((state) => state.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreatePostFormData>();

  const onSubmit = async (data: CreatePostFormData) => {
    try {
      // This would be your API call to create a post
      console.log("Creating post:", data);
      reset();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <textarea
        {...register("content", {
          required: "Post content is required",
          maxLength: {
            value: 500,
            message: "Post cannot exceed 500 characters",
          },
        })}
        placeholder="What's on your mind?"
        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none min-h-[120px] resize-none"
      />
      <div className="flex justify-end">
        <Button type="submit" loading={isSubmitting}>
          Post
        </Button>
      </div>
    </form>
  );
};
