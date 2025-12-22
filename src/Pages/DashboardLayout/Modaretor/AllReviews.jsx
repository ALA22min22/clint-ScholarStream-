import React from 'react';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { FaTrashArrowUp } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loading from '../../../component/Loading';

const AllReviews = () => {
    const axiosSecure = UseAxiosSequre();
    const { data: allReviewes = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["my-review"],
        queryFn: async () => {
            const res = await axiosSecure.get("/my-review");
            return res.data;
        }
    })
    // console.log(allReviewes)

    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <div>Error is here in the data......</div>
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
                axiosSecure.delete(`/review/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            console.log("after delete the review:", res.data);
                            Swal.fire({
                                title: "Deleted!",
                                text: "The review has been deleted.",
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
            <h3 className="text-5xl font-bold text-primary text-center mt-10">All Reviews</h3>

            <div className="border-b border-gray-300 my-10"></div>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>University & Reviewer Name</th>
                            <th>Scholarship Name</th>
                            <th>Review Comment</th>
                            <th>Review Date</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allReviewes.map((review, index) => <tr key={review._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={review.reviewerImage}
                                                    alt="Reviewer Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{review.universityName}</div>
                                            <div>
                                                {review.reviewerName}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {review.scholarshipName}

                                </td>
                                <td>{review.comment}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">{review.date}</button>
                                </td>
                                <td className='flex items-center gap-1'><FaStar className='text-yellow-400' />{review.rating}</td>

                                <td>
                                    <button onClick={() => handleReviewDelete(review._id)} className='text-red-500 btn'><FaTrashArrowUp /></button>
                                </td>

                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllReviews;