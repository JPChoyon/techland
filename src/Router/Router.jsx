
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import AddProdact from '../Pages/AddProdact/AddProdact';
import Cart from '../Pages/Cart/Cart';
import ErrorPage from '../Pages/ErrorPage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("data.json")
      },
      {
        path: "/addprodact",
        element:<AddProdact></AddProdact>
      },
      {
        path: "cart",
        element:<Cart></Cart>
      }
    ],
  },
]);

export default Router;