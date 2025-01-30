import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

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
    element: <div>Page not found</div>,
  },
]);
