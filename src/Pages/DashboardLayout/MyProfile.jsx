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



    return (
        <div>
            <h3 className='text-5xl font-bold text-primary text-center mt-10 uppercase'>My Profile</h3>
            <div className='border-b border-gray-300 mt-10'></div>
            {
                myData.map(user => <div className="flex justify-center items-center min-h-screen bg-base-200 py-10">

                    <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-gray-100">

                        <div className="flex justify-center -mt-12">
                            <div >
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        className='rounded-full w-full h-full'
                                        src={user.photoURL}
                                        alt="Profile"
                                    />
                                </div>
                            </div>
                        </div>

                       
                        <div className="card-body items-center text-center mt-2">
                            <div className="badge badge-secondary badge-outline  text-xs font-bold mb-2">
                                {user.role}
                            </div>

                           
                            <h2 className="card-title text-2xl font-bold text-gray-800">
                                {user.displayName}
                            </h2>

                            
                            <p className="text-gray-500 font-medium break-all">
                                {user.email}
                            </p>

                            <div className="divider my-2"></div>

                            {/* Join Date */}
                            <div className="stats shadow-sm w-full bg-base-200/50">
                                <div className="stat place-items-center p-4">
                                    <div className="stat-title text-xs uppercase">Member Since</div>
                                    <div className=" text-primary font-bold text-sm">
                                        {new Date(user.createAT).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                             <div>
                                <p className='uppercase text-gray-500 underline'>My ID</p>
                                <small className=''>{user._id}</small>
                             </div>

                        </div>
                    </div>
                </div>
                )
            }


        </div>
    );
};

export default MyProfile;