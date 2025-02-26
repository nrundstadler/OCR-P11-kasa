import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Apartment from "./pages/Apartment/Apartment";
import NotFound from "./pages/NotFound/NotFound";

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
        path: "/apartment",
        element: <Apartment />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*", // Catch-all
        element: <NotFound />, // Display the 404 page for unmatched routes
      },
    ],
  },
]);
