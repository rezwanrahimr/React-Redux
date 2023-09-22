import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import MainLayout from "../layout";
import Products from "../components/Products";
import Cart from "../components/Cart/Cart";

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
]);
