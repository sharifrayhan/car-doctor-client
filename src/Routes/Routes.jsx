import {
    createBrowserRouter,
  } from "react-router-dom";
import Rootpage from "../Pages/Rootpage";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import AddService from "../Pages/AddService";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage></Rootpage>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/AddService",
          element: <AddService></AddService>,
        },
      ],
    }, 
  ]);

    
 export default router
  