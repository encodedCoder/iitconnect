// src/pages/Notifications.tsx
import React from "react";
import { Card } from "../components/ui/Card";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface Notification {
  id: string;
  type: "like" | "follow" | "comment";
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  post?: {
    id: string;
    content: string;
  };
  createdAt: string;
  read: boolean;
}

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  const message = {
    like: "liked your post",
    follow: "followed you",
    comment: "commented on your post",
  }[notification.type];

  return (
    <div className={`p-4 ${!notification.read ? "bg-blue-50" : ""}`}>
      <div className="flex items-start gap-3">
        <Avatar src={notification.user.avatar} alt={notification.user.name} />
        <div className="flex-1">
          <p className="text-sm">
            <Link
              to={`/profile/${notification.user.id}`}
              className="font-semibold hover:underline"
            >
              {notification.user.name}
            </Link>{" "}
            {message}
          </p>
          {notification.post && (
            <p className="text-sm text-gray-600 mt-1">
              "{notification.post.content.slice(0, 60)}..."
            </p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {new Date(notification.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const Notifications: React.FC = () => {
  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      // This would be your API call
      return [] as Notification[];
    },
  });

  return (
    <Card>
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <Button variant="ghost" size="sm">
          Mark all as read
        </Button>
      </div>
      <div className="divide-y">
        {notifications?.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </Card>
  );
};

export default Notifications;
