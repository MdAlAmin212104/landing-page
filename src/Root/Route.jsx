import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import LandingPage from "../Page/landingPage/LandingPage";
import AboutPage from "../Page/AboutPage/AboutPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        { 
          path: "/",
          element: <LandingPage/>,
        },
        {
          path: "/about",
          element: <AboutPage/>,
        }
      ]
    },
]);