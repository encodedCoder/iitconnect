// src/components/profile/ProfileHeader.tsx
import React from "react";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface ProfileHeaderProps {
  user: {
    id: string;
    name: string;
    bio?: string;
    avatar?: string;
    isFollowing?: boolean;
    followersCount: number;
    followingCount: number;
  };
  isOwnProfile?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  user,
  isOwnProfile,
}) => {
  return (
    <Card className="mb-6">
      <div className="flex items-start gap-4">
        <Avatar src={user.avatar} alt={user.name} size="lg" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">{user.name}</h1>
              {user.bio && <p className="text-gray-600 mt-1">{user.bio}</p>}
            </div>
            {isOwnProfile ? (
              <Button variant="outline">Edit Profile</Button>
            ) : (
              <Button variant={user.isFollowing ? "outline" : "default"}>
                {user.isFollowing ? "Following" : "Follow"}
              </Button>
            )}
          </div>
          <div className="flex gap-4 mt-4">
            <div className="text-center">
              <p className="font-semibold">{user.followersCount}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{user.followingCount}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
