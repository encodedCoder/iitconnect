// src/components/layout/Layout.tsx
import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { Menu } from "lucide-react";
import { Button } from "../ui/Button";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6 relative">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 sticky top-6">
            <Sidebar className="sticky top-6" />
          </div>

          {/* Mobile Sidebar Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg bg-primary text-white lg:hidden z-50"
            onClick={() => setIsMobileSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Mobile Sidebar */}
          <MobileSidebar
            isOpen={isMobileSidebarOpen}
            onClose={() => setIsMobileSidebarOpen(false)}
          />

          {/* Main Content */}
          <main className="flex-1 max-w-2xl mx-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
