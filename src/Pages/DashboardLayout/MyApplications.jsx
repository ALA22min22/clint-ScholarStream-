import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSequre from '../Hooks/UseAxiosSequre';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { GoCodeReview } from 'react-icons/go';

const MyApplications = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSequre();
    const { data: applications = [] } = useQuery({
        queryKey: ["applications", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?userEmail=${user.email}`);
            return res.data;
        }
    })

    // console.log("applcations:", applications)

    return (
        <div>
            <h2 className="text-5xl font-bold text-black text-center my-10">my all applications</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>University Name</th>
                            <th>Scholarship Name</th>
                            <th>Feedback </th>
                            <th>Subject Category</th>
                            <th>Application Fees</th>
                            <th>Application Status</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((apply, index) => <tr key={apply._id}>
                            <th>{index + 1}</th>
                            <td className='border-x'>{apply.universityName}</td>
                            <td className=' text-primary rounded '>{apply.scholarshipName}</td>
                            <td>{apply.feedback}</td>
                            <td >{apply.scholarshipCategory}</td>

                            <td className=' btn rounded-full '>{apply.applicationFees}</td>

                            <td className={`${apply.applicationStatus === "pending" && 'text-red-500'} ${apply.applicationStatus === "processing" && 'text-yellow-400'} ${apply.applicationStatus === "completed" && 'text-green-500'}`}>{apply.applicationStatus}</td>
                            <td className={`
                                ${apply.paymentStatus === "unpaid"? 'text-red-500': 'text-green-500' }
                                `}>{apply.paymentStatus}</td>
                            <td className='flex  gap-5'>
                                {
                                    apply.applicationStatus === "pending" && apply.paymentStatus === "unpaid" ? <button className='btn btn-primary mr-5 text-white'>Pay</button> : ""
                                }
                                <button className='btn'>Details</button>
                                {
                                    apply.applicationStatus === "pending" &&
                                    <button className='btn text-emerald-600'><FaEdit /></button>
                                }
                                
                                {
                                    apply.applicationStatus === "completed" &&
                                    <button className='btn'>Add Review <GoCodeReview /></button>
                                }
                                {
                                     apply.applicationStatus === "pending" &&
                                    <button className='btn text-red-500'><FaTrashAlt /></button>
                                }
                            </td>
                            
                        </tr> )
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;