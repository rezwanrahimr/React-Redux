import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import MainLayout from "../layout";
import Products from "../components/Products";
import Cart from "../components/Cart/Cart";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // {
      //   path:
      // }
    ],
  },
]);
