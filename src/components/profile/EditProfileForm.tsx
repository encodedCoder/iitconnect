// src/components/profile/EditProfileForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface EditProfileFormData {
  name: string;
  bio: string;
  avatar?: FileList;
}

interface EditProfileFormProps {
  user: {
    name: string;
    bio?: string;
    avatar?: string;
  };
  onClose: () => void;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
  user,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormData>({
    defaultValues: {
      name: user.name,
      bio: user.bio || "",
    },
  });

  const onSubmit = async (data: EditProfileFormData) => {
    try {
      // Handle profile update API call here
      onClose();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Name"
          {...register("name", { required: "Name is required" })}
          error={errors.name?.message}
        />
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Bio</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            {...register("bio")}
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full"
            {...register("avatar")}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Card>
  );
};
