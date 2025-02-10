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
                element: <Home/>,
                loader:() => fetch("/data.json")
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
                path: "/adventure/:id",
                element: <AdventureDetails />,
                loader: async ({ params }) => {
                    const res = await fetch("/data.json"); 
                    const data = await res.json();
                    const adventure = data.find(adventure => adventure.id ==(params.id));
                    return adventure || {}; 
                }
            }
        ]
    }
])
    

export default router;