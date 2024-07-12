import { Root } from "@/layouts";
import "./Layout.css";
import { Home, About, NotFound, Futurama } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext/ThemeContext";
import Dogs from "../pages/Dogs/Dogs";
import Profil from "../pages/Profil/Profil";
import { ProductCard } from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/Dogs",
        element: <Dogs />,
      },
      {
        path: "/Futurama",
        element: <Futurama />,
      },
      {
        path: "/Profil",
        element: <Profil />,
      },
      {
        path: "/ProductCard",
        element: <ProductCard />,
        errorElement: <NotFound />,
      },
    ],

    errorElement: <NotFound />,
  },

  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);
function Layout() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default Layout;
