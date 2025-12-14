import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/NavBarPages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <div>404 error is occure Pls trying the right path</div>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);