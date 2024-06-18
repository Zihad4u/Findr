import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home/Home.jsx';
import Login from './Authentication/Login.jsx';
import Register from './Authentication/Register.jsx';
import AuthContext from './Authprovider/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './Details/Details.jsx';
import Products from './ProductsSection/Products.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path:"/products",
        element:<Products></Products>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><RouterProvider router={router} /><ToastContainer/></AuthContext>
  </React.StrictMode>,
)
