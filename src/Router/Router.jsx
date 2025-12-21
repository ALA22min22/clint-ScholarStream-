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
import MyApplications from "../Pages/DashboardLayout/MyApplications";
import PaymentCancelled from "../Pages/DashboardLayout/Payment/PaymentCancelled";
import PaymentSuccess from "../Pages/DashboardLayout/Payment/PaymentSuccess";
import MyReviews from "../Pages/DashboardLayout/Students/MyReviews";
import ManageScholarships from "../Pages/DashboardLayout/Admin/ManageScholarships";
import UpdateScholership from "../Pages/DashboardLayout/Admin/UpdateScholership";
import ManageUsers from "../Pages/DashboardLayout/Admin/ManageUsers";
import Analytics from "../Pages/DashboardLayout/Admin/Analytics";
import AllApplication from "../Pages/DashboardLayout/Modaretor/AllApplication";
import AllReviews from "../Pages/DashboardLayout/Modaretor/AllReviews";

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
        path: 'dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        // errorElement: <div>Dashboard. 404 Error. Plz try again</div>,
        children: [
            {
                path: 'myProfile',
                element: <PrivateRoute> <MyProfile></MyProfile> </PrivateRoute>
            },
            // admin
            {
                path: "addScholarship",
                Component: AddScholarship
            },
            {
                path: "manage-scholarships",
                Component: ManageScholarships
            },
            {
                path: "update-scholarships",
                Component: UpdateScholership
            },
            {
                path: "manage-users",
                Component: ManageUsers
            },
            {
                path: "analytics",
                Component: Analytics
            },
            // Modaretor
            {
                path: "all-application",
                Component: AllApplication
            },
            {
                path: "allReviews",
                Component: AllReviews
            },
            // student
            {
                path: "myApplications",
                element: <PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
            },
            {
                path: "myReview",
                Component: MyReviews
            },
            // payment
            {
                path: "payment-success",
                Component: PaymentSuccess
            },
            {
                path: "payment-cancelled",
                Component: PaymentCancelled
            }
        ]
    }
]);