import React, { Children } from 'react';
import UseAuth from '../Pages/Hooks/UseAuth';
import UseRole from '../Pages/Hooks/UseRole';
import Loading from '../component/Loading';

const ModaretorPrivateRoute = ({ children }) => {
    const { user ,loader } = UseAuth();
    const { role, maintenerLoading } = UseRole();

    if (loader || maintenerLoading) {
        return <Loading></Loading>
    }

    if(role !== "modaretor"){
        return <p>Forbiddne Access.... The User is "{user.displayName}"  </p>
    }

    return children ;
};

export default ModaretorPrivateRoute;