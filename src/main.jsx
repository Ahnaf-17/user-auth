import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './compoents/Root/Root';
import Home from './compoents/Home/Home';
import Login from './compoents/Login/Login';
import Register from './compoents/Register/Register';
import HeroRegister from './compoents/HeroRegister/HeroRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register>  </Register>
      },
      {
        path: '/heroRegister',
        element: <HeroRegister></HeroRegister>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
