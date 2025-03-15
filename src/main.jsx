import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import OurImpact from "./components/OurImpact.jsx";
import OurOperation from "./components/OurOperation.jsx";

const router = createBrowserRouter([
  { path: "/impact", element: <OurImpact /> },
  { path: "/operation", element: <OurOperation /> },
  { path: "/", element: <App /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
