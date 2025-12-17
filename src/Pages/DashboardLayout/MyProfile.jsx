import React from 'react';
// import { useParams } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSequre from '../Hooks/UseAxiosSequre';
import Loading from '../../component/Loading';

const MyProfile = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSequre();
    const { data: myData = [], isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user.email}`)
            return res.data
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    console.log(myData);


    return (
        <div>
            <h3>My profileee {myData.length}</h3>
            {
                myData.map(data => <div key={data._id}>
                    <h3 className="text-5xl">{data.displayName}</h3>
                </div>
                )
            }
        </div>
    );
};

export default MyProfile;