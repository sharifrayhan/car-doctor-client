import {
    createBrowserRouter,
  } from "react-router-dom";
import Rootpage from "../Pages/Rootpage";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import AddService from "../Pages/AddService";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        {
          path: "/Login",
          element:<Login></Login>,
        },
        {
          path: "/Register",
          element: <Register></Register>,
        },
      ],
    }, 
  ]);

    
 export default router
  