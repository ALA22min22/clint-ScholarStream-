import React from 'react';
import UseAuth from '../Pages/Hooks/UseAuth';
import Loading from '../component/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading} = UseAuth();
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;