// src/pages/Profile.tsx
// import React from "react";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileTabs } from "../components/profile/ProfileTabs";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/ui/Spinner";

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();

  // const { data: profile, isLoading } = useQuery({
  //   queryKey: ["profile", userId],
  //   queryFn: async () => {
  //     // This would be your API call
  //     return {
  //       id: userId,
  //       name: "Test User",
  //       bio: "This is a test bio",
  //       followersCount: 100,
  //       followingCount: 50,
  //       isFollowing: false,
  //     };
  //   },
  // });
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      if (!userId) throw new Error("User ID is required");
      return {
        id: userId,
        name: "Test User",
        followersCount: 0,
        followingCount: 0,
      };
    },
  });

  if (isLoading) return <Spinner />;
  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="max-w-2xl mx-auto py-6">
      <ProfileHeader user={profile} />
      <ProfileTabs userId={profile.id} />
    </div>
  );
};

export default Profile;
