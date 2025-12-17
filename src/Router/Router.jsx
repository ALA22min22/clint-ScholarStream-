import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/NavBarPages/Home/Home";
import AuthenticationLayout from "../Pages/AuthenticationLayout/AuthenticationLayout";
import Register from "../Pages/AuthenticationLayout/Register/Register";
import Login from "../Pages/AuthenticationLayout/Login/Login";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../Pages/DashboardLayout/Dashboard";
import MyProfile from "../Pages/DashboardLayout/MyProfile";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import AddScholarship from "../Pages/AllScholarship/AddScholarship";
import ScholershipDetails from "../Pages/AllScholarship/ScholershipDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <div>ROOT 404 error is occure Pls trying the right path</div>,
        children: [
            {
                index: true,
                path: 'home',
                Component: Home
            },
            {
                path: "allScholarship",
                Component: AllScholarship
            },
            {
                path: "scholarships/:id",
                element: <PrivateRoute> <ScholershipDetails></ScholershipDetails> </PrivateRoute>
            }
            
           
        ]
    },
    {
        path: "/",
        Component: AuthenticationLayout,
        // errorElement: <div>AuthenticationLayout 404 error is occure Pls trying the right path</div>,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '/',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        errorElement: <div>Dashboard. 404 Error. Plz try again</div>,
        children: [
            {
                path: 'myProfile',
                element: <PrivateRoute> <MyProfile></MyProfile> </PrivateRoute>
            },
            {
                path: "addScholarship",
                Component: AddScholarship
            }
        ]
    }
]);