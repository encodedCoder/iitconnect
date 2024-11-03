// src/routes/index.tsx
import { lazy } from "react";

export const routes = {
  Home: lazy(() => import("../pages/Home")),
  Profile: lazy(() => import("../pages/Profile")),
  CreatePost: lazy(() => import("../pages/CreatePost")),
  Messages: lazy(() => import("../pages/Messages")),
  Notifications: lazy(() => import("../pages/Notifications")),
  Settings: lazy(() => import("../pages/Settings")),
  Login: lazy(() => import("../pages/Login")),
  Register: lazy(() => import("../pages/Register")),
};
