import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn.js/LogIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/appointment', element: <Appointment></Appointment> },
            { path: '/login', element: <LogIn></LogIn> }
        ]
    }
])

export default router;