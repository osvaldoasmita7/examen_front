import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { NotFound } from "../pages/NotFound";
import { ClienteDetalles } from "../pages/ClienteDetalles";
export const Router = () => {
  // Aquí se crean las rutas
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/client/:id",
      element: <ClienteDetalles></ClienteDetalles>,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
      errorElement: <ErrorPage />,
    },
  ]);
  // Se renderizan las rutas en el provider
  return <RouterProvider router={router} />;
};
