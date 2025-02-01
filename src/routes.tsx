import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts";
import Home from "./pages/Home";
import PageNotFound from "./components/404";

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
    path: "*",
    element: <PageNotFound />,
  },
]);
