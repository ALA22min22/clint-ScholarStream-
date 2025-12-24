import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../Hooks/UseAuth';
import UseAxiosSequre from '../Hooks/UseAxiosSequre';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AddScholarship = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSequre();
    const { register, handleSubmit, reset } = useForm();

    const handleAddScholershiph = data => {
        console.log(data);
        const photoURL = data.universityImage[0];

        const formData = new FormData();
        formData.append("image", photoURL);

        const send_to_store_image = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`;

        //send to imgBB
        axios.post(send_to_store_image, formData)
            .then(res => {
                console.log("after send the img to imgBB", res.data.data.display_url);
                const universityImageURL = res.data.data.display_url;

                //send info to the database:
                const mongoData = {
                    ...data,
                    universityImage: universityImageURL
                }
                axiosSecure.post("/scholarships", mongoData)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log("after user register data save MDB", res.data)
                            toast(`data sucessfully inserted to the mongodb: ${res.data}`)
                            reset();
                        }
                    })
            })
            
    }

    return (<>
        <section class="bg-base-200 min-h-screen flex items-center justify-center py-10 px-4">
            <div class="card w-full max-w-4xl bg-base-100 shadow-xl border border-base-300">
                <div class="card-body">
                    <h2 class="card-title text-3xl font-bold text-center justify-center text-primary mb-8">
                        Add Scholarship Details
                    </h2>

                    <form onSubmit={handleSubmit(handleAddScholershiph)} class="space-y-6">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Scholarship Name</span>
                                </label>
                                <input type="text" {...register("scholarshipName", { required: true })} placeholder="Fulbright Program" class="input input-bordered w-full" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">University Name</span>
                                </label>
                                <input type="text" {...register("universityName", { required: true })} placeholder="Harvard University" class="input input-bordered w-full" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">University Image</span>
                                </label>
                                <input type="file" {...register("universityImage", { required: true })} class="file-input file-input-bordered file-input-primary w-full" accept="image/*" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">World Rank</span>
                                </label>
                                <input type="number" {...register("worldRank", { required: true })} placeholder="10" class="input input-bordered w-full" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Country</span>
                                </label>
                                <input type="text" {...register("country", { required: true })} placeholder="bangladesh" class="input input-bordered w-full" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">City</span>
                                </label>
                                <input type="text" {...register("city", { required: true })} placeholder="division/district" class="input input-bordered w-full" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Subject Category</span>
                                </label>
                                <select {...register("subjectCategory", { required: true })} class="select select-bordered w-full" >
                                    <option disabled selected>Select Subject</option>
                                    <option>Engineering</option>
                                    <option>Medical</option>
                                    <option>Humanities</option>
                                    <option>Business</option>
                                    <option>Agriculture</option>
                                </select>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Scholarship Category</span>
                                </label>
                                <select {...register("scholarshipCategory", { required: true })} class="select select-bordered w-full" >
                                    <option disabled selected>Select Category</option>
                                    <option>Full Fund</option>
                                    <option>Partial</option>
                                    <option>Self Fund</option>
                                </select>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Degree</span>
                                </label>
                                <select {...register("degree", { required: true })} class="select select-bordered w-full" >
                                    <option disabled selected>Select Degree</option>
                                    <option>Bachelor</option>
                                    <option>Masters</option>
                                    <option>Diploma</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Tuition Fees <span class="badge badge-ghost badge-sm font-normal">Optional</span></span>
                                </label>
                                <input type="number" {...register("tuitionFees", { valueAsNumber: true })} placeholder="$" class="input input-bordered w-full" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Application Fees</span>
                                </label>
                                <input type="number" {...register("applicationFees", { required: true })} placeholder="$" class="input input-bordered w-full" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Service Charge</span>
                                </label>
                                <input type="number" {...register("serviceCharge", { required: true })} placeholder="$" class="input input-bordered w-full" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Application Deadline</span>
                                </label>
                                <input type="date" {...register("deadline", { required: true })} class="input input-bordered w-full" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Post Date</span>
                                </label>
                                <input type="date" {...register("postDate", { required: true })} class="input input-bordered w-full" />
                            </div>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold">User Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="user@example.com" value={user?.email} class="input input-bordered w-full" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-semibold">Scholarship Description</span>
                            </label>
                            <br />
                            <textarea {...register("description", { required: true })} class="textarea textarea-bordered  h-24 w-full " placeholder="Write a brief description about the scholarship..." ></textarea>
                        </div>

                        <div class="form-control mt-8">
                            <button type="submit" class="btn btn-primary w-full text-lg font-bold text-white">
                                Add Scholarship
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    </>
    );
};

export default AddScholarship;