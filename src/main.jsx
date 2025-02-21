import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'animate.css';

import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
