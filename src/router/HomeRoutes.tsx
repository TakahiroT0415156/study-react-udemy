import { Home } from "../Components/Pages/Home";
import { Page404 } from "../Components/Pages/Page404";
import { Setting } from "../Components/Pages/Setting";
import { UserManagement } from "../Components/Pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "/user_management",
    children: <UserManagement />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
  {
    path: "*",
    children: <Page404 />,
  },
];
