// src/components/profile/ProfileTabs.tsx
import React from "react";
import { Button } from "../ui/Button";
import { PostList } from "../posts/PostList";

interface ProfileTabsProps {
  userId: string;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({ userId }) => {
  const [activeTab, setActiveTab] = React.useState<"posts" | "likes">("posts");

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Button
          variant={activeTab === "posts" ? "default" : "ghost"}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </Button>
        <Button
          variant={activeTab === "likes" ? "default" : "ghost"}
          onClick={() => setActiveTab("likes")}
        >
          Likes
        </Button>
      </div>

      {activeTab === "posts" ? (
        <PostList userId={userId} />
      ) : (
        <PostList userId={userId} type="likes" />
      )}
    </div>
  );
};
