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
    path:'/dashRoot',
    element:<Sidebar></Sidebar>,
    children:[
      {
        path:"/dashRoot",
        element:<RootHome></RootHome>
      },
      {
        path:"/dashRoot/myProfile",
        element:<MyProfile></MyProfile>
      },
      {
        path:"/dashRoot/addProduct",
        element:<AddProuct></AddProuct>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext><RouterProvider router={router} /><ToastContainer /></AuthContext>
  </React.StrictMode>,
)
