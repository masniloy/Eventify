import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Events from "../pages/Events";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AllEvents from "../pages/dashboard/AllEvents";
import AddEvents from "../pages/dashboard/AddEvents";
import EditEvent from "../pages/dashboard/EditEvent";
import EventDetails from "../pages/EventDetails";
import DashboardEventDetails from "../pages/dashboard/DashboardEventDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "eventDetails/:id",
                element: <EventDetails />,
            },

        ]
    },


    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <Dashboard />
            </PrivateRoutes>
        ),
        children: [
            {
                index: true,
                element: <DashboardHome />,
            },
            {
                path: "allEvents",
                element: <AllEvents />,
            },
            {
                path: "addEvent",
                element: <AddEvents />
            },
            {
                path: "editEvent/:id",
                element: <EditEvent />,
            },
            {
                path: "DashboardEventDetails/:id",
                element: <DashboardEventDetails />,
            },
        ]
    }
])




export default router;