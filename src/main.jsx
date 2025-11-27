import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Fiche from "./pages/Fiche.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Layout from "./components/Layout.jsx";
import "./assets/styles/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/fiche-logement",
    element: <Fiche />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
