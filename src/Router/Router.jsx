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
import AdminPrivateRoute from "../Provider/AdminPrivateRoute";
import ModaretorPrivateRoute from "../Provider/ModaretorPrivateRoute";
import Successer from "../Pages/NavBarPages/Home/Successer";
import ContactWithFAQ from "../Pages/NavBarPages/Home/ContactWithFAQ";

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
            },
            {
                path: "successer",
                Component: Successer
            },
            {
                path: "faq",
                Component: ContactWithFAQ
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
                element:  <MyProfile></MyProfile> 
            },
            // admin
            {
                path: "addScholarship",
                element: <AdminPrivateRoute> <AddScholarship></AddScholarship> </AdminPrivateRoute>
            },
            {
                path: "manage-scholarships",
                element: <AdminPrivateRoute> <ManageScholarships></ManageScholarships> </AdminPrivateRoute>
            },
            {
                path: "update-scholarships",
                element: <AdminPrivateRoute> <UpdateScholership></UpdateScholership> </AdminPrivateRoute>
            },
            {
                path: "manage-users",
                element: <AdminPrivateRoute> <ManageUsers></ManageUsers> </AdminPrivateRoute>
            },
            {
                path: "analytics",
                element: <AdminPrivateRoute> <Analytics></Analytics> </AdminPrivateRoute>
            },
            // Modaretor
            {
                path: "all-application",
                element: <ModaretorPrivateRoute> <AllApplication></AllApplication> </ModaretorPrivateRoute>
            },
            {
                path: "allReviews",
                element: <ModaretorPrivateRoute> <AllReviews></AllReviews> </ModaretorPrivateRoute>
            },
            // student
            {
                path: "myApplications",
                element:  <MyApplications></MyApplications> 
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