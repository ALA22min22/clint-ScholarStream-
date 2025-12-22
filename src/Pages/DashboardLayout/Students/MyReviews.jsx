import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { BiSolidMessageEdit } from 'react-icons/bi';
import { FaTrashArrowUp } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import Loading from '../../../component/Loading';

const MyReviews = () => {
    const [reviewData, setReviewData] = useState(null);

    const myRef = useRef(null);
    const { register, handleSubmit, reset } = useForm();

    const { user } = UseAuth();
    const axiooSecure = UseAxiosSequre();
    const { data: myReviews = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["my-review", user?.displayName],
        queryFn: async () => {
            const res = await axiooSecure.get(`/my-review?reviewerName=${user.displayName}`);
            return res.data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <div>Error is here in the data......</div>
    }

    const handleUpdateReview = (currentInfo) => {
        myRef.current.showModal();
        setReviewData(currentInfo);
    }


    const handleUpdateForm = async (data) => {
        console.log(data);

        const updateInfo = {
            rating: data.rating,
            comment: data.comment
        }

        await axiooSecure.patch(`/review/${reviewData._id}`, updateInfo)
            .then(res => {
                if (res.data.acknowledged) {
                    console.log("after update the data", res.data);
                    toast("Your Review Updated Successfull")
                    refetch();
                    myRef.current.close();
                    reset();
                }
            })


    }

    const handleReviewDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able delete this Review!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiooSecure.delete(`/review/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    console.log("after delete the review:", res.data);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your review has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
            })
            }
        });
        // ---------
        
    }

    return (
        <div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Scholarship Name</th>
                            <th>University Name</th>
                            <th>Review Comment</th>
                            <th>Review Date</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map((review, index) => <tr key={review._id}>
                                <th>{index + 1}</th>
                                <td>{review.scholarshipName}</td>
                                <td>{review.universityName}</td>
                                <td>{review.comment}</td>
                                <td>{review.date}</td>
                                <td>{review.rating}</td>
                                <td className='flex gap-3'>
                                    <button onClick={() => handleUpdateReview(review)} className='btn text-primary'><BiSolidMessageEdit /></button>
                                    <button onClick={() => handleReviewDelete(review._id)} className='btn text-red-500'><FaTrashArrowUp /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {/* update review modal */}
            <div>
                <dialog ref={myRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-11/12 max-w-2xl">
                        <h3 className="font-bold text-lg text-center mb-1">Update Review!</h3>
                        <form
                            method='dialog'
                            onSubmit={handleSubmit(handleUpdateForm)}
                            className="card bg-base-200 w-xl mx-auto shadow-xl p-4 space-y-4"
                        >
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
                                Update Review
                            </button>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
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

export default MyReviews;