import React from 'react';
import UseAuth from '../Pages/Hooks/UseAuth';
import UseRole from '../Pages/Hooks/UseRole';
import Loading from '../component/Loading';

const AdminPrivateRoute = ({ children }) => {
    const { loader } = UseAuth();
    const { role, maintenerLoading } = UseRole();
    if (loader || maintenerLoading) {
        return <Loading></Loading>
    }

    if (role !== "admin") {
        return <div>Forbiddne Access..........</div>
    }

    return children ;
};

export default AdminPrivateRoute;