// src/components/layout/Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import {
  Home,
  Bell,
  Mail,
  User,
  Settings,
  Bookmark,
  Hash,
  TrendingUp,
  Users,
} from "lucide-react";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface TrendingTopic {
  id: string;
  name: string;
  postsCount: number;
}

interface SuggestedUser {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

const navigation: NavigationItem[] = [
  { label: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
  {
    label: "Notifications",
    icon: <Bell className="w-5 h-5" />,
    path: "/notifications",
  },
  { label: "Messages", icon: <Mail className="w-5 h-5" />, path: "/messages" },
  {
    label: "Bookmarks",
    icon: <Bookmark className="w-5 h-5" />,
    path: "/bookmarks",
  },
  { label: "Profile", icon: <User className="w-5 h-5" />, path: "/profile" },
  {
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    path: "/settings",
  },
];

export const Sidebar: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);

  // This would normally come from an API
  const trendingTopics: TrendingTopic[] = [
    { id: "1", name: "IITRopar", postsCount: 1234 },
    { id: "2", name: "Placements2024", postsCount: 856 },
    { id: "3", name: "TechFest", postsCount: 654 },
    { id: "4", name: "CampusLife", postsCount: 432 },
  ];

  // This would normally come from an API
  const suggestedUsers: SuggestedUser[] = [
    { id: "1", name: "John Doe", bio: "Computer Science, 3rd Year" },
    { id: "2", name: "Jane Smith", bio: "Mechanical Engineering, 2nd Year" },
    { id: "3", name: "Alex Johnson", bio: "Electrical Engineering, 4th Year" },
  ];

  const NavigationLink: React.FC<NavigationItem> = ({ label, icon, path }) => {
    const isActive = location.pathname === path;
    return (
      <Link to={path}>
        <Button
          variant={isActive ? "default" : "ghost"}
          className="w-full justify-start gap-3"
        >
          {icon}
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <div className={`w-64 flex flex-col gap-6 ${className}`}>
      {/* User Profile Card */}
      {user && (
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Avatar src={user.avatar} alt={user.name} />
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">
                @{user.email.split("@")[0]}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Navigation */}
      <Card className="p-2">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavigationLink key={item.path} {...item} />
          ))}
        </nav>
      </Card>

      {/* Trending Topics */}
      <Card>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <h2 className="font-semibold">Trending Topics</h2>
          </div>
        </div>
        <div className="p-2">
          {trendingTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.name}`}
              className="block p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="font-medium">#{topic.name}</p>
                  <p className="text-sm text-gray-600">
                    {topic.postsCount} posts
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>

      {/* Suggested Users */}
      <Card>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <h2 className="font-semibold">Who to Follow</h2>
          </div>
        </div>
        <div className="p-2">
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Avatar src={user.avatar} alt={user.name} size="sm" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.bio}</p>
                  </div>
                </div>
                <Button size="sm">Follow</Button>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/suggest-users"
          className="block p-4 text-center text-sm text-primary hover:underline"
        >
          Show more
        </Link>
      </Card>

      {/* Footer Links */}
      <div className="text-sm text-gray-500 px-4">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <Link to="/about" className="hover:underline">
            About
          </Link>{" "}
          •
          <Link to="/terms" className="hover:underline">
            Terms
          </Link>{" "}
          •
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          •
          <Link to="/help" className="hover:underline">
            Help Center
          </Link>
        </div>
        <p className="mt-2">© 2024 IIT Connect</p>
      </div>
    </div>
  );
};
