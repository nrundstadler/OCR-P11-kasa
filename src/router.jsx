import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import Error from "./components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/appartement/:id",
        element: <Apartment />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "*", // Catch-all
        element: <Error title="404" subtitle="Oups! La page que vous demandez n'existe pas." />, // Display the 404 page for unmatched routes
      },
    ],
  },
]);
