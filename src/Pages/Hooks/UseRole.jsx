import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSequre from './UseAxiosSequre';

const UseRole = () => {

    const {user} = UseAuth();
    const axiooSecure = UseAxiosSequre();
    const {data: role = "student", isLoading: maintenerLoading} = useQuery({
        queryKey: ["user-role", user?.email ],
        queryFn : async () => {
            const res = await axiooSecure.get(`/users/${user.email}/role`);
            return res.data.role;
        },
        enabled : !!user?.email,
    })

    // const role = mainUser?.role || "student";
    
    return {role, maintenerLoading}
};

export default UseRole;