import React, { useRef, useState } from 'react';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FcFeedback, FcViewDetails } from 'react-icons/fc';
import { MdCancelScheduleSend } from 'react-icons/md';

const AllApplication = () => {
    const { register, handleSubmit, reset } = useForm();

    const detailsModal = useRef(null);
    const feedBackModal = useRef(null);
    const [detaisInfo, setDetailsInfo] = useState(null);
    const [addFeedback, setFeedback] = useState(null);

    const axiooSecure = UseAxiosSequre();
    const { data: allAplications = [], refetch } = useQuery({
        queryKey: ["applications"],
        queryFn: async () => {
            const res = await axiooSecure.get("/applications");
            return res.data;
        }
    })
    // console.log(allAplications)

    const handleDetails = (details) => {
        detailsModal.current.showModal();
        setDetailsInfo(details);
    }

    const handleAddFeedBack = (revied) => {
        feedBackModal.current.showModal();
        setFeedback(revied)
    }


    const handleSubmitFeedback = data => {
        // console.log(data.feedback);

        const updateData = {
            feedback: data.feedback
        }
        axiooSecure.patch(`/application/${addFeedback._id}`, updateData)
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log("the application feedback is updated successfully", res.data);
                    toast(`the ${addFeedback?.userName} application feedback is updated successfully`);
                    feedBackModal.current.close();
                    refetch();
                    reset();
                }
            })
    }

    const handleApplicationStatus = (data, status) => {
        const updateStatus = {
            applicationStatus: status
        }
        axiooSecure.patch(`/application/application-status/${data._id}`, updateStatus)
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log("the application status is updated successfully", res.data);
                    toast(`the ${data?.userName} application status(${status}) is updated successfully`);
                    refetch();
                }
            })
    }

    return (
        <div>
            <h3 className="text-5xl font-bold text-primary text-center my-10">All Applications</h3>
            <div className="border-b text-gray-300 mb-10"></div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant Name</th>
                            <th>Applicant Email</th>
                            <th>University Name</th>
                            <th>Application Feedback</th>
                            <th>Application Status</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAplications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td className='text-yellow-400'>{app.userName}</td>
                                <td>{app.userEmail}</td>
                                <td>{app.universityName}</td>
                                <td className='text-green-500'>{app?.feedback}</td>
                                <td className={`${app.applicationStatus === "pending" && 'text-cyan-700'}
                                 ${app.applicationStatus === "processing" && 'text-yellow-400'}
                                  ${app.applicationStatus === "completed" && 'text-green-500'} ${app.applicationStatus === "rejected" && 'text-red-500'}`}>{app.applicationStatus}</td>
                                <td className={`
                                ${app.paymentStatus === "unpaid" || app.paymentStatus === "reject" ? 'text-red-500' : 'text-green-500'}
                                `}>{app.paymentStatus}</td>


                                <td className='flex gap-3'>
                                    <button onClick={() => handleDetails(app)} className='btn hover:tooltip' data-tip="Details"><FcViewDetails /></button>

                                    <button onClick={() => handleAddFeedBack(app)} className='btn hover:tooltip' data-tip="Feedback"><FcFeedback /></button>

                                    {/* status change */}
                                    <div className="dropdown dropdown-left dropdown-center hover:tooltip" data-tip="Application Status Update" >
                                        <div tabIndex={0} role="button" className="btn m-1">Status Update ⬅️</div>
                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a onClick={() => handleApplicationStatus(app, "processing")}>Processing</a></li>
                                            <li><a onClick={() => handleApplicationStatus(app, "completed")}>Completed</a></li>
                                            <li><a onClick={() => handleApplicationStatus(app, "pending")}>Pending</a></li>
                                        </ul>
                                    </div>

                                    {/* status reject */}
                                    <button onClick={() => handleApplicationStatus(app, "rejected")}className='btn text-red-500 hover:tooltip ' data-tip="Rejected Application"><MdCancelScheduleSend /></button>

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

            {/* --------add Feedback modal---------------- */}
            <div>
                <dialog ref={feedBackModal} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-11/12 max-w-2xl">
                        <form

                            onSubmit={handleSubmit(handleSubmitFeedback)}
                            className="card bg-base-200 w-xl mx-auto shadow-xl p-4 space-y-4"
                        >
                            {/* Feedback */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea
                                    placeholder="Write your review..."
                                    {...register("feedback", { required: true })}
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary w-full text-white">
                                Submit Feedback
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

export default AllApplication;