import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboad from "../../Pages/Dashboard/Dashboard/Dashboad";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn.js/LogIn";
import SignUp from "../../Pages/LogIn/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/appointment', element: <Appointment></Appointment> },
            { path: '/dashboard', element: <PrivateRoute><Dashboad></Dashboad></PrivateRoute> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/signup', element: <SignUp></SignUp> }
        ]
    }
])

export default router;