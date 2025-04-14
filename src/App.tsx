import { Toaster } from "react-hot-toast";
import { routes } from "./routes.tsx";
import { RouterProvider } from "react-router-dom";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
