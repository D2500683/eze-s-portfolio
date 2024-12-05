import React from "react";
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import './index.css';

export default function App(){
  const PageLayout = () =>{
    return (
      <>
      <Outlet/>
      </>
    );
  };


  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "about-me",
          element:<AboutMe/>
        }
      ]
    }
  ]
  )
  return <RouterProvider router={pageRoutes} />
};