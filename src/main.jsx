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
import PrivateRoute from './PrivateRoute.jsx';
import Sidebar from './Dashboard/Sidebar.jsx';
import DashRoot from './Dashboard/DashRoot.jsx';
import RootHome from './Dashboard/RootHome.jsx';
import MyProfile from './Dashboard/Myprofile/MyProfile.jsx';
import AddProuct from './Dashboard/AddProuct.jsx';
import MyProduct from './Dashboard/Myprofile/MyProduct.jsx';
import Update from './Dashboard/Myprofile/Update.jsx';
import ProductReview from './Dashboard/Moderator/ProductReview.jsx';
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
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: "/products",
        element: <Products></Products>,
      }
    ],
  },
  {
    path: '/dashRoot',
    element: <PrivateRoute><Sidebar></Sidebar></PrivateRoute>,
    children: [
      {
        path: "/dashRoot",
        element: <PrivateRoute><RootHome></RootHome></PrivateRoute>
      },
      {
        path: "/dashRoot/myProfile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/dashRoot/addProduct",
        element: <PrivateRoute><AddProuct></AddProuct></PrivateRoute>
      },
      {
        path: "/dashRoot/myProduct",
        element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
      },
      {
        path: "/dashRoot/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path:"/dashRoot/productReview",
        element:<ProductReview></ProductReview>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><RouterProvider router={router} /><ToastContainer /></AuthContext>
  </React.StrictMode>,
)
