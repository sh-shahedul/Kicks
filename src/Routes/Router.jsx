import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductsDetails from "../Components/ProductsDetails/ProductsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
       {
          index:true,
          element:<Home></Home>

        },
        {
           path:'/products-details/:id',
           element:<ProductsDetails></ProductsDetails>,
           
        }
    ]
  },
]);