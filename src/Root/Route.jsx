import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import LandingPage from "../Page/landingPage/LandingPage";
import AboutPage from "../Page/AboutPage/AboutPage";
import BuyerPage from "../Page/BuyerPage/BuyerPage";

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
        },
        {
          path: "/property",
          element: <BuyerPage/>,
        },
      ]
    },
]);