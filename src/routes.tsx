import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/homePageLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/404-page";
import { DashboardLayout } from "./layouts/dashboardLayout";

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
        element: <div>testing</div>,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);
