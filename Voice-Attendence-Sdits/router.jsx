import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Attendence from "./src/component/Attendence";
import Register from "./src/component/Register";
import AdminLogin from "./src/component/AdminLogin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
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