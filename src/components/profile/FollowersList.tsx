// src/components/profile/FollowersList.tsx
import React from "react";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface Follower {
  id: string;
  name: string;
  avatar?: string;
  isFollowing: boolean;
}

interface FollowersListProps {
  followers: Follower[];
  onFollowToggle: (userId: string) => void;
}

export const FollowersList: React.FC<FollowersListProps> = ({
  followers,
  onFollowToggle,
}) => {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Followers</h2>
      <div className="space-y-4">
        {followers.map((follower) => (
          <div key={follower.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar src={follower.avatar} alt={follower.name} size="sm" />
              <p className="font-medium">{follower.name}</p>
            </div>
            <Button
              variant={follower.isFollowing ? "outline" : "default"}
              size="sm"
              onClick={() => onFollowToggle(follower.id)}
            >
              {follower.isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
