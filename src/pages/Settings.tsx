// src/pages/Settings.tsx
import React from "react";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useAuthStore } from "../store/authStore";
import { Bell, Moon, Globe, Shield, LogOut } from "lucide-react";

const Settings: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: true,
    mentions: true,
  });

  const [theme, setTheme] = React.useState("light");
  const [language, setLanguage] = React.useState("en");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Account Settings */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <Input label="Name" defaultValue={user?.name} />
            <Input
              label="Email"
              type="email"
              defaultValue={user?.email}
              disabled
            />
            <div>
              <label className="text-sm font-medium text-gray-700">Bio</label>
              <textarea
                className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                defaultValue={user?.bio}
              />
            </div>
            <Button>Update Profile</Button>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm font-medium">Email Notifications</span>
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    email: e.target.checked,
                  })
                }
                className="rounded text-primary focus:ring-primary"
              />
            </label>
            <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm font-medium">Push Notifications</span>
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={(e) =>
                  setNotifications({ ...notifications, push: e.target.checked })
                }
                className="rounded text-primary focus:ring-primary"
              />
            </label>
            <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm font-medium">Mentions & Replies</span>
              <input
                type="checkbox"
                checked={notifications.mentions}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    mentions: e.target.checked,
                  })
                }
                className="rounded text-primary focus:ring-primary"
              />
            </label>
          </div>
        </div>
      </Card>

      {/* Appearance */}
      <Card>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Moon className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Appearance</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Language */}
      <Card>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Language & Region</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="te">Telugu</option>
                <option value="ta">Tamil</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Privacy & Security</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm font-medium">Private Profile</span>
              <input
                type="checkbox"
                className="rounded text-primary focus:ring-primary"
              />
            </label>
            <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
              <span className="text-sm font-medium">
                Two-Factor Authentication
              </span>
              <input
                type="checkbox"
                className="rounded text-primary focus:ring-primary"
              />
            </label>
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-red-600 mb-4">
            Danger Zone
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Delete Account</h3>
                <p className="text-sm text-gray-500">
                  Permanently delete your account and all your data
                </p>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Logout */}
      <Card>
        <div className="p-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => {
              // Handle logout
            }}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
