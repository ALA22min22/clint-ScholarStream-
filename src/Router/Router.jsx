import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/NavBarPages/Home/Home";
import AuthenticationLayout from "../Pages/AuthenticationLayout/AuthenticationLayout";
import Register from "../Pages/AuthenticationLayout/Register/Register";
import Login from "../Pages/AuthenticationLayout/Login/Login";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../Pages/DashboardLayout/Dashboard";
import MyProfile from "../Pages/DashboardLayout/MyProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <div>ROOT 404 error is occure Pls trying the right path</div>,
        children: [
            {
                index: true,
                Component: Home
            },
           
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
                Component: MyProfile
            }
        ]
    }
]);