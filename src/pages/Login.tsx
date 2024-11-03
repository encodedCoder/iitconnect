// src/pages/Login.tsx
import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import { Card } from "../components/ui/Card";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Welcome back to IIT Connect
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/register"
              className="font-medium text-primary hover:text-primary/90"
            >
              create a new account
            </Link>
          </p>
        </div>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
