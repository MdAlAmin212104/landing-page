import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        { 
            path: "/",
            element: <h1>Home</h1>
        },
      ]
    },
]);