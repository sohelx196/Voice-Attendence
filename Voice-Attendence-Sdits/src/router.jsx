import { createBrowserRouter } from "react-router-dom";




import App from "./App";
import Attendence from "./component/Attendence";
import Home from "./component/Home";
import Register from "./component/Register";
import AdminLogin from "./component/AdminLogin";


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
                path: "attendence",
                element: <Attendence/>
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