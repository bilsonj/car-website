import React from "react";

import About from "../about/about"

import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import Home from '../home/home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Kiamodel from "../kiamodel/kiamodel";
import Cars from "../cars/cars";

AOS.init();
const route =createBrowserRouter([

    {
        path:"/",
        element:<Home/>
        
    },
    {
        path:"about",
        element:<About/>
    },
    {
        path:"cars",
        element:<Cars/>

    },
    {
        path:"Kiamodel",
        element:<Kiamodel/>
    }
])
// const route =createBrowserRouter([

//     {
//         path:"/",
//         element:</Home>
//     }
// ])
export const navigator=<RouterProvider router={route}/>
