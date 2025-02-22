import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import Profile from "../Pages/Profile";
import AdventureDetails from "../Pages/AdventureDetails";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";



const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
                loader:async () => {
                   const adventruesRes = await fetch("/data.json");
                   const adventuresData = await adventruesRes.json()

                   const testimonialsRes = await fetch("/testimonials.json");
                   const testimonialsData = await testimonialsRes.json()

                   return{adventuresData, testimonialsData}
                }
            },
            {
                path:"/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute><UpdateProfile/></PrivateRoute>
            },
            {
                path:"/profile",
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: "/adventure",
                element: <PrivateRoute><AdventureDetails /></PrivateRoute>,
                loader:()=> fetch("/data.json")
                
            }
           
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])
    

export default router;