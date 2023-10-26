import {
    createBrowserRouter,
  } from "react-router-dom";
import Rootpage from "../Pages/Rootpage";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";

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
      ],
    }, 
  ]);

    
 export default router
  