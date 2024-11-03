// src/components/layout/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { useAuthStore } from "../../store/authStore";

export const Navbar: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold">
          IIT Connect
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/create">
                <Button variant="ghost">Create Post</Button>
              </Link>
              <Button onClick={logout} variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
