import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/homePageLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/404-page";
import { DashboardLayout } from "./layouts/dashboardLayout";
import UserDashboard from "./dashboards/userDashboard";
import UserProfile from "./dashboards/userDashboard/pages/profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile />,
      },
      {
        path: "*",
        element: <div>In progress...</div>,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);
