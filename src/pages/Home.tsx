// src/pages/Home.tsx
import React from "react";
import { useAuthStore } from "../store/authStore";
import { CreatePostForm } from "../components/posts/CreatePostForm";
import { PostList } from "../components/posts/PostList";
import { Card } from "../components/ui/Card";

const Home = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-6 max-w-full">
      {/* Welcome Card */}
      <Card className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Share your thoughts with the IIT Ropar community
        </p>
      </Card>

      {/* Create Post */}
      <Card className="p-4 sm:p-6">
        <CreatePostForm />
      </Card>

      {/* Posts Feed */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold px-2">Recent Posts</h2>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
