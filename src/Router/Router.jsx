import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProdact from "../Pages/AddProdact/AddProdact";
import Cart from "../Pages/Cart/Cart";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProdactDetails from "../Component/ProdactDetails/ProdactDetails";
import EachBrandDetails from "../Component/EachBrandDetails/EachBrandDetails";
import Privetroute from "../PrivetRoute/PrivetRoute";
import UpdateProdact from "../Pages/UpdateProdact/UpdateProdact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addprodact",
        element: (
          <Privetroute>
            <AddProdact></AddProdact>
          </Privetroute>
        ),
      },
      {
        path: "/cart",
        element: (
          <Privetroute>
            <Cart></Cart>
          </Privetroute>
        ),
        loader: () =>
          fetch(
            "https://techland-server-jpchoyon-jp-choyon-khans-projects.vercel.app/deletecart"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/:name",
        element: (
          <Privetroute>
            <ProdactDetails></ProdactDetails>
          </Privetroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://techland-server-jpchoyon-jp-choyon-khans-projects.vercel.app/prodact/${params.name}`
          ),
      },
      {
        path: "/updateprodact/:id",
        element: (
          <Privetroute>
            <UpdateProdact></UpdateProdact>
          </Privetroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://techland-server-jpchoyon-jp-choyon-khans-projects.vercel.app/prodactDetails/${params.id}`
          ),
      },
      {
        path: "/brandDetails/:id",
        element: (
          <Privetroute>
            <EachBrandDetails></EachBrandDetails>
          </Privetroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://techland-server-jpchoyon-jp-choyon-khans-projects.vercel.app/prodactDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
