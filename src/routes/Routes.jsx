import { createBrowserRouter } from "react-router";
import Homepage from "../pages/home/Homepage";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Aboutpage from "../pages/about/Aboutpage";

export const router = createBrowserRouter([
    {
    path:'/',
    Component:HomeLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
        index:true,
        path:"/",
        Component:Homepage
        },
        {
            path:"/about",
            Component:Aboutpage
        },
       
]

}])