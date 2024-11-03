// src/pages/CreatePost.tsx
// import React from "react";
import { CreatePostForm } from "../components/posts/CreatePostForm";
import { Card } from "../components/ui/Card";

const CreatePost = () => {
  return (
    <div className="max-w-2xl mx-auto py-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Create Post</h1>
        <CreatePostForm />
      </Card>
    </div>
  );
};

export default CreatePost;
