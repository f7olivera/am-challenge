import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./ErrorPage.tsx";
import { ProtectedRoutes } from "./routes/ProtectedRoutes.tsx";
import { HomeScreen } from "./features/home/screens/HomeScreen.tsx";
import { SignInScreen } from "./features/user-identification/screens/SignInScreen.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { PublicRoute } from "./routes/PublicRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "/home",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <SignInScreen />
      </PublicRoute>
    ),
    index: true,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
