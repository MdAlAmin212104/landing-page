import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import LandingPage from "../Page/landingPage/LandingPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        { 
            path: "/",
            element: <LandingPage/>,
        },
      ]
    },
]);