import { useForm } from "react-hook-form";
import UseAxiosSequre from "../Hooks/UseAxiosSequre";
import UseAuth from "../Hooks/UseAuth";
import { toast, ToastContainer } from "react-toastify";

const ReviewForm = ({ scholarship }) => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = UseAxiosSequre();
    const { user } = UseAuth();

    const submitReview = (data) => {

        console.log("Review Data:", data);

        const inserData = {
            scholarshipId: scholarship._id,
            scholarshipName : scholarship.scholarshipName,
            universityName : scholarship.universityName,
            ...data,
        }
        axiosSecure.post("/review", inserData)
            .then(res => {
                if (res.data.insertedId) {
                    console.log("the review data is inserted successfully", res.data);
                    toast("the review data is inserted successfully")
                }
            })
        reset();
    };

    return (
        <div>
            <h2 className="text-5xl text-black font-bold text-center my-10">Write a Review</h2>
            <form
                onSubmit={handleSubmit(submitReview)}
                className="card bg-base-200 lg:w-xl mx-auto shadow-xl p-4 space-y-4"
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
            <ToastContainer />
        </div>
    );
};

export default ReviewForm;
