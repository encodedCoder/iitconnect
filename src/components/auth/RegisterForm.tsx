// src/components/auth/RegisterForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data.email, data.password, data.name);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />
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
      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};
