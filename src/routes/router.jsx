import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import Profile from "../Pages/Profile";
import AdventureDetails from "../Pages/AdventureDetails";



const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children: [
            {
                path:"/",
                element: <Home/>
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
                element: <UpdateProfile/>
            },
            {
                path:"/profile",
                element:<Profile/>
            },
            {
                path: "/adventure",
                element: <AdventureDetails/>
            }
        ]
    }
])
    

export default router;