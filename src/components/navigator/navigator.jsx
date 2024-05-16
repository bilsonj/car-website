import React from "react";

import About from "../about/about"

import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import Home from '../home/home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Kiamodel from "../kiamodel/kiamodel";
import Cars from "../cars/cars";
import Contacts from "../contacts/contacts";
import Volvo from "../volvo/volvo";

import Hyundaimodel from "../hyundai/hyundai";

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
        path:"contacts",
        element:<Contacts/>
    },
    {
        path:"Kiamodel",
        element:<Kiamodel/>
    },
    {
        path:"volvo",
        element:<Volvo/>
    },
    {
      path:"hyundaimodel",
      element:<Hyundaimodel/>
    }
])
// const route =createBrowserRouter([

//     {
//         path:"/",
//         element:</Home>
//     }
// ])
export const navigator=<RouterProvider router={route}/>
