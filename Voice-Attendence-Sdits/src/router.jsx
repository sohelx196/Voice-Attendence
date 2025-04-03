import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./component/Home";
import Register from "./component/Register";
import AdminLogin from "./component/AdminLogin";
import Leaderboard from "./component/Leaderboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element:<Home/>
            },
            {
                path: "leaderboard",
                element: <Leaderboard/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "adminLogin",
                element:<AdminLogin/>
            },

        ]    
    }
]);