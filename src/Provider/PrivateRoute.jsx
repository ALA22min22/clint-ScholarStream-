import React from 'react';
import UseAuth from '../Pages/Hooks/UseAuth';
import Loading from '../component/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loader} = UseAuth();
    const location = useLocation();
    if(loader){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;