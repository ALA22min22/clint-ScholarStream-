import React, { useRef, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSequre from '../Hooks/UseAxiosSequre';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { GoCodeReview } from 'react-icons/go';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../component/Loading';

const MyApplications = () => {
    const { register, handleSubmit, reset } = useForm();

    const detailsModal = useRef(null);
    const addReviewes = useRef(null);
    const [detaisInfo, setDetailsInfo] = useState(null);
    const [addReview, setAddReview] = useState(null);

    const { user } = UseAuth();
    const axiosSecure = UseAxiosSequre();
    const { data: applications = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["applications", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/applications?userEmail=${user.email}`);
            return res.data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <div>Error is here in the data......</div>
    }

    const handlePay = async (apply) => {
        const paymentInfo = {
            applicationId: apply._id,
            userEmail: apply.userEmail,
            scholarshipName: apply.scholarshipName,
            cost: apply.applicationFees,
            universityName: apply.universityName,
            userName: apply.userName
        }

        const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
        console.log(res.data)
        window.location.href = res.data.url;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able delete this scholership!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/application/${id}`)
                    .then(res => {
                        console.log("after delete", res.data)
                        if (res.data.acknowledged) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your scholer file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleDetails = (details) => {
        detailsModal.current.showModal();
        setDetailsInfo(details);
    }

    const handleAddReview = (revied) => {
        addReviewes.current.showModal();
        setAddReview(revied)

    }

    const handleSubmitReview = data => {
        console.log(data);

        const inserData = {
            scholarshipId: addReview.scholarshipId,
            scholarshipName: addReview.scholarshipName,
            universityName: addReview.universityName,
            ...data,
        }
        axiosSecure.post("/review", inserData)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("the review data is inserted successfully", res.data);
                    toast("the review data is inserted successfully");
                    addReviewes.current.close();
                    reset();
                }
            })
    }

    // console.log("review modal details", addReview);


    return (
        <div>
            <h2 className="text-5xl font-bold text-primary text-center uppercase mt-10">My All Applications</h2>
            <div className='border-b border-gray-300 my-10'></div>
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

                                <td className=' btn rounded-full '>${apply.applicationFees}</td>

                                <td className={`${apply.applicationStatus === "pending" && 'text-cyan-700'}
                                 ${apply.applicationStatus === "processing" && 'text-yellow-400'}
                                  ${apply.applicationStatus === "completed" && 'text-green-500'} ${apply.applicationStatus === "rejected" && 'text-red-500'}`}>{apply.applicationStatus}</td>
                                <td className={`
                                ${apply.paymentStatus === "unpaid" || apply.paymentStatus === "reject" ? 'text-red-500' : 'text-green-500'}
                                `}>{apply.paymentStatus}</td>


                                <td className='flex  gap-5'>
                                    {
                                        apply.applicationStatus === "pending" && apply.paymentStatus === "unpaid" || apply.paymentStatus === "reject" ? <button
                                            onClick={() => handlePay(apply)} className='btn btn-primary mr-5 text-white'>Pay</button> : ""
                                    }
                                    <button onClick={() => handleDetails(apply)} className='btn'>Details</button>
                                    {
                                        apply.applicationStatus === "pending" &&
                                        <button className='btn text-emerald-600'><FaEdit /></button>
                                    }

                                    {/* reached only application status is: completed */}
                                    {
                                        apply.applicationStatus === "completed" &&
                                        <button onClick={() => handleAddReview(apply)} className='btn'>Add Review <GoCodeReview /></button>
                                    }
                                    {
                                        apply.applicationStatus === "pending" &&
                                        <button onClick={() => handleDelete(apply._id)} className='btn text-red-500'><FaTrashAlt /></button>
                                    }
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

            {/*----------details modal---------------------- */}
            <div>
                <dialog ref={detailsModal} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-11/12 max-w-2xl">

                        {/* --- Header Section, details and transaction and payment info --- */}
                        <div className="text-center mb-6">
                            <h3 className="font-bold text-2xl text-primary">Application Details</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Tracking ID: <span className=" font-bold text-gray-700">{detaisInfo?.trackingId}</span>
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Payment Status: <span className=" font-bold text-gray-700">{detaisInfo?.paymentStatus}</span>
                            </p>
                        </div>

                        {/* --- 2 column scholer & aplication info --- */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/*----------University & Scholarship Info ------------*/}
                            <div className="space-y-3">
                                <h4 className="font-bold border-b pb-2 text-gray-700">University Information</h4>

                                <div>
                                    <p className="text-xs text-gray-500">University Name</p>
                                    <p className="font-semibold text-gray-800">{detaisInfo?.universityName}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Scholarship Name</p>
                                    <p className="font-semibold text-gray-800">{detaisInfo?.scholarshipName}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Category</p>
                                    <span className="badge badge-outline badge-primary mt-1">
                                        {detaisInfo?.scholarshipCategory}
                                    </span>
                                </div>
                            </div>

                            {/* -------------Applicant Info---------------- */}
                            <div className="space-y-3">
                                <h4 className="font-bold border-b pb-2 text-gray-700">Applicant Information</h4>

                                <div>
                                    <p className="text-xs text-gray-500">Applicant Name</p>
                                    <p className="font-semibold text-gray-800">{detaisInfo?.userName}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="font-semibold text-gray-800 break-all">{detaisInfo?.userEmail}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Degree</p>
                                    <p className="font-semibold text-gray-800">{detaisInfo?.degree}</p>
                                </div>
                            </div>
                        </div>

                        {/* --- Fees & Status Section--------------------- */}
                        <div className="mt-6 bg-base-200 p-4 rounded-lg">
                            <h4 className="font-bold mb-3 text-gray-700">Fees & Application Status</h4>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-500">Application Date</p>
                                    <p className="font-bold">{detaisInfo?.applicationDate}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Application Fees</p>
                                    <p className="font-bold">${detaisInfo?.applicationFees}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Service Charge</p>
                                    <p className="font-bold">${detaisInfo?.serviceCharge}</p>
                                </div>

                                {/* application stutas */}
                                <div>
                                    <p className="text-gray-500 mb-1">Application Status</p>
                                    <div className="flex gap-2">
                                        <span className={`badge ${detaisInfo?.applicationStatus === "pending" && 'bg-red-500'}
                                 ${detaisInfo?.applicationStatus === "processing" && 'bg-yellow-400'}
                                  ${detaisInfo?.applicationStatus === "completed" && 'bg-green-500'}`}>
                                            {detaisInfo?.applicationStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Modaretor ---------feedback */}
                            {detaisInfo?.feedback && (
                                <div className="mt-4 pt-3 border-t border-gray-300">
                                    <p className="text-xs text-gray-500 font-bold">Moderator Feedback:</p>
                                    <p className="text-sm text-red-500 mt-1">{detaisInfo.feedback}</p>
                                </div>
                            )}
                        </div>

                        {/* --- Modal Actions --- */}
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-error text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            {/* --------add review modal---------------- */}
            <div>
                <dialog ref={addReviewes} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-11/12 max-w-2xl">
                        <form
                            method='dialog'
                            onSubmit={handleSubmit(handleSubmitReview)}
                            className="card bg-base-200 w-xl mx-auto shadow-xl p-4 space-y-4"
                        >

                            {/* Reviewer Image URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    value={user?.photoURL}
                                    placeholder="https://example.com/photo.jpg"
                                    {...register("reviewerImage")}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Reviewer Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    placeholder="Your Name"
                                    {...register("reviewerName", { required: true })}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating (1-5)</span>
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    {...register("rating", { required: true })}
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Comment */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <textarea
                                    placeholder="Write your review..."
                                    {...register("comment", { required: true })}
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary w-full text-white">
                                Submit Review
                            </button>
                        </form>
                        {/* ---------------------------------------------------------- */}
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyApplications;