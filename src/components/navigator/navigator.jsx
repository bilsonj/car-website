import React from "react";

import About from "../about/about"

import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import Home from '../home/home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Kiamodel from "../kiamodel/kiamodel";

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
