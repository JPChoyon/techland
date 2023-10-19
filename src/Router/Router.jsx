import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import AddProdact from '../Pages/AddProdact/AddProdact';
import Cart from '../Pages/Cart/Cart';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ProdactDetails from '../Component/ProdactDetails/ProdactDetails';

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
        element: <AddProdact></AddProdact>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
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
        element: <ProdactDetails></ProdactDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/prodact/${params.name}`),
      },
    ],
  },
]);

export default Router;