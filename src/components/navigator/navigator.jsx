import React from "react";

import About from "../about/about";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../home/home";
import AOS from "aos";
import "aos/dist/aos.css";
import Kiamodel from "../kiamodel/kiamodel";
import Cars from "../cars/cars";

import Contacts from "../contacts/contacts";
import Volvo from "../volvo/volvo";
import Suzuki from "../suzuki/suziki";
import Hyundaimodel from "../hyundai/hyundai";
import Minicoper from "../minicopper/minicoper";
import Tata from "../tata/tata";
// import Newnavbar from "../newnavbar/newnavbar";
import Nav1 from "../nav/nav";

AOS.init();
const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about1",
    element: <About />,
  },
  {
    path: "cars1",
    element: <Cars />,
  },
  {
    path: "contacts1",
    element: <Contacts />,
  },
  {
    path: "Kiamodel",
    element: <Kiamodel />,
  },
  {
    path: "volvo",
    element: <Volvo />,
  },
  {
    path: "hyundaimodel",
    element: <Hyundaimodel />,
  },
  {
    path: "suzuki",
    element: <Suzuki />,
  },
  {
    path: "minicoper",
    element: <Minicoper />,
  },
  {
    path: "tata",
    element: <Tata />,
  },
  {
    path: "nav1",
    element: <Nav1 />,
  },
]);
// const route =createBrowserRouter([

//     {
//         path:"/",
//         element:</Home>
//     }
// ])
export const navigator = <RouterProvider router={route} />;
