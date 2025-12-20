import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';

const ManageUsers = () => {
    const axiooSecure = UseAxiosSequre();
    const {data: allUsers = []} = useQuery({
        queryKey: ["users"],
        queryFn: async()=> {
            const res = await axiooSecure.get("/users");
            return res.data;
        }
    })
    console.log(allUsers)
    return (
        <div>
            Manage Users
        </div>
    );
};

export default ManageUsers;