// src/components/profile/ProfilePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileTabs } from "./ProfileTabs";
import { Spinner } from "../ui/Spinner";
import { useAuthStore } from "../../store/authStore";

export const ProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const currentUser = useAuthStore((state) => state.user);

  // src/components/profile/ProfilePage.tsx
  // src/pages/Profile.tsx
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      return {
        id: userId || "",
        name: "Test User",
        bio: "This is a test bio",
        followersCount: 100,
        followingCount: 50,
        isFollowing: false,
      };
    },
  });

  if (isLoading) return <Spinner />;
  if (!profile) return <div>Profile not found</div>;

  const isOwnProfile = currentUser?.id === profile.id;

  return (
    <div className="max-w-2xl mx-auto py-6">
      <ProfileHeader user={profile} isOwnProfile={isOwnProfile} />
      <ProfileTabs userId={profile.id} />
    </div>
  );
};
