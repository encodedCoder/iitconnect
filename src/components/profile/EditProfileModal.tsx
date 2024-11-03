// src/components/profile/EditProfileModal.tsx
import React from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "../ui/Button";
import { EditProfileForm } from "./EditProfileForm";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    name: string;
    bio?: string;
    avatar?: string;
  };
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md w-full bg-white rounded-lg">
          <div className="p-6">
            <Dialog.Title className="text-lg font-semibold mb-4">
              Edit Profile
            </Dialog.Title>
            <EditProfileForm user={user} onClose={onClose} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
