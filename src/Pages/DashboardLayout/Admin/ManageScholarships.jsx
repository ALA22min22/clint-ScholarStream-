// import React, { useState } from 'react';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router';
import { BiSolidMessageEdit } from 'react-icons/bi';
import { FaTrashArrowUp } from 'react-icons/fa6';
import UpdateScholership from './UpdateScholership';
import AddScholarship from '../../AllScholarship/AddScholarship';
import Swal from 'sweetalert2';
import Loading from '../../../component/Loading';


const ManageScholarships = () => {

    const navigate = useNavigate();
    const axiooSecure = UseAxiosSequre();
    const { data: scholarships = [], refetch, isLoading, isError } = useQuery({
        queryKey: ["scholarships"],
        queryFn: async () => {
            const res = await axiooSecure.get('/scholarships');
            return res.data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <div>Error is here in the data......</div>
    }

    const handaleUpdate = scholer => {
        navigate('/dashboard/update-scholarships', { state: scholer })
    }

    const handleDeleteScholer = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able delete in this pages that Scholersiph!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiooSecure.delete(`/scholarships/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            console.log("after delete the scholership:", res.data)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your page scholersiph has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });


    }

    return (
        <div>
            <h3 className='text-5xl font-bold text-primary text-center mt-10 '>Manage Scholership</h3>
            <div className='border-b border-gray-300 my-10'></div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                NO
                            </th>
                            <th>University</th>
                            <th>Scholarship Name</th>
                            <th>World Rank</th>
                            <th>Subject Category</th>
                            <th>Degree</th>
                            <th>All Fees</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            scholarships.map((scholer, index) => <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={scholer.universityImage}
                                                    alt="university image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{scholer.universityName}</div>
                                            <div className="text-sm opacity-50">{scholer.country}, {scholer.city}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {scholer.scholarshipName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{scholer.scholarshipCategory}</span>
                                </td>
                                <td>{scholer.worldRank}</td>
                                <td>
                                    {scholer.subjectCategory}
                                </td>
                                <td>
                                    {scholer.degree}
                                </td>
                                <td className='flex flex-col gap-1'>
                                    <p className='border-x border-red-400 rounded p-1'>Application Fees : {scholer.applicationFees}</p>
                                    <p className='border-x border-red-400 rounded p-1'>Service Charge : {scholer.serviceCharge}</p>
                                    <p className='border-x border-red-400 rounded p-1'>Tuition Fees : {scholer.tuitionFees}</p>
                                </td>
                                <td>
                                    <p>Post Date: {scholer.postDate}</p>
                                    <p>Deadline: {scholer.deadline}</p>
                                </td>

                                <td className='flex gap-3'>
                                    {/* <Link  to={'/dashboard/update-scholarships'} state={stateNave}>
                                    </Link> */}
                                    <button onClick={() => handaleUpdate(scholer)} className='btn text-primary'><BiSolidMessageEdit /></button>
                                    <button onClick={() => handleDeleteScholer(scholer._id)} className='btn text-red-500'><FaTrashArrowUp /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageScholarships;