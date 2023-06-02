import { LayoutDefault } from "../layouts";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Routes } from "./config";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    /* errorElement: <ErrorPage />, */
    children: [
      {
        path: "/",
        element: <Navigate to="/useState" replace />,
      },
      ...Object.values(Routes).map(({ path, element }) => ({
        path,
        element,
      })),
      {
        path: "*",
        element: <Navigate to="/useState" replace />,
      },
    ],
  },
]);
