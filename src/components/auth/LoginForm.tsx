// src/components/auth/LoginForm.tsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useAuthStore } from "../../store/authStore";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      // For easy testing, remove in production
      email: "test@iitrpr.ac.in",
      password: "password123",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      await login(data.email, data.password);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      <Input
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /@iitrpr\.ac\.in$/,
            message: "Must be an IIT Ropar email",
          },
        })}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        error={errors.password?.message}
      />

      <Button type="submit" className="w-full" loading={isSubmitting}>
        Sign in
      </Button>

      {/* Development helper */}
      <div className="text-sm text-gray-500 mt-4">
        <p>For testing, you can use:</p>
        <pre className="bg-gray-100 p-2 rounded mt-1">
          Email: test@iitrpr.ac.in Password: password123
        </pre>
      </div>
    </form>
  );
};
