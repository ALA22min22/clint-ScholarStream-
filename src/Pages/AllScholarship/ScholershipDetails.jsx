import React from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import UseAxiosSequre from '../Hooks/UseAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import ReviewForm from './ReviewForm';
import ReviewSections from './ReviewSections';
import UseAuth from '../Hooks/UseAuth';
import axios from 'axios';

const ScholershipDetails = () => {
    const { user } = UseAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const axiooSecure = UseAxiosSequre();

    const axiooPublic = axios.create({
        baseURL: 'https://scolership-server.vercel.app',
    });

    const { data: scholarship = [] } = useQuery({
        queryKey: ["scholarships", id],
        queryFn: async () => {
            const res = await axiooPublic.get(`/selected-scholarships/${id}`);
            return res.data
        }
    })

    const { data: currentUser = [] } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await axiooSecure.get(`/users?email=${user.email}`);
            return res.data;
        }
    })

    //  console.log("user id", currentUser[0]?.displayName)

    const handleApply = data => {
        const insertOnTheAC = {
            scholarshipId: data._id,
            userId: currentUser[0]?._id,
            userName: currentUser[0]?.displayName,
            userEmail: currentUser[0]?.email,
            universityName: data.universityName,
            scholarshipName: data.scholarshipName,
            scholarshipCategory: data.scholarshipCategory,
            degree: data.degree,
            applicationFees: data.applicationFees,
            serviceCharge: data.serviceCharge,
        }

        axiooSecure.post('/applications', insertOnTheAC)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(`after insert the application data ${res.data}`)
                    navigate('/dashboard/myApplications')
                }
            })

    }


    // console.log("after details", details)
    return (
        <div className='bg-base-200 px-2'>
            <div className="min-h-screen bg-base-200 pt-10 ">

                <div className="">

                    {/* --- Hero Section --- */}
                    <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-2xl shadow-xl mb-8 group">
                        <img
                            src={scholarship.universityImage}
                            alt={scholarship.universityName}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                {scholarship.scholarshipName}
                            </h1>
                            <p className="text-white/90 text-lg font-semibold flex items-center gap-2">
                                <span className="bg-primary px-3 py-1 rounded text-sm text-white">{scholarship.scholarshipCategory}</span>
                                {scholarship.universityName}
                            </p>
                        </div>
                    </div>

                    {/* --- Main Content Grid --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Description Card */}
                            <div className="card bg-base-100 shadow-xl border border-base-200 ">
                                <div className="card-body ">
                                    <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">About the Scholarship</h2>
                                    <p className="text-base-content/80 leading-relaxed text-justify break-words">
                                        {scholarship.description}
                                    </p>
                                </div>
                            </div>

                            {/* Stipend & Coverage  */}
                            <div className="card bg-base-100 shadow-xl border border-base-200">
                                <div className="card-body py-10">
                                    <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">Stipend & Coverage</h2>
                                    <ul className="space-y-3">

                                        {/* Item 1 */}
                                        <li className="flex items-center gap-3 text-base-content/80 font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Tuition Fees: {scholarship.tuitionFees}
                                        </li>

                                        {/* Item 2 */}
                                        <li className="flex items-center gap-3 text-base-content/80 font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Application Fees: {scholarship.applicationFees}
                                        </li>

                                        {/* Item 3 */}
                                        <li className="flex items-center gap-3 text-base-content/80 font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Service Charge: {scholarship.serviceCharge}
                                        </li>

                                        {/* Item 4 */}
                                        <li className="flex items-center gap-3 text-base-content/80 font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Scholarship Category: {scholarship.scholarshipCategory}
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="card bg-base-100 shadow-xl border border-base-200 sticky top-10">
                                <div className="card-body">
                                    <h3 className="text-xl font-bold text-center mb-6 text-primary">Scholarship Details</h3>

                                    <div className="space-y-4">
                                        {/* University Rank */}
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-gray-500 font-medium">World Rank</span>
                                            <span className="font-bold flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827.954L17.5 7.03l2.715 4.073a1 1 0 01-1.371 1.371l-4.072-2.715-3.275 1.528A1 1 0 0110 10.999V3a1 1 0 011-1z" clipRule="evenodd" /></svg>
                                                #{scholarship.worldRank}
                                            </span>
                                        </div>

                                        {/* Location */}
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-gray-500 font-medium">Location</span>
                                            <span className="font-bold text-right">{scholarship.country}, {scholarship.city}</span>
                                        </div>

                                        {/* Post Date  */}
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-gray-500 font-medium">Post Date</span>
                                            <span className="font-bold text-primary">{scholarship.postDate}</span>
                                        </div>

                                        {/* Deadline */}
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-gray-500 font-medium">Deadline</span>
                                            <span className="font-bold text-red-500">{scholarship.deadline}</span>
                                        </div>


                                        {/* Application Fees */}
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-gray-500 font-medium">Application Fees</span>
                                            <span className="font-bold text-green-600">${scholarship.applicationFees}</span>
                                        </div>
                                        {/* Service Charge */}
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="text-gray-500 font-medium">Service Charge</span>
                                            <span className="font-bold text-green-600">${scholarship.serviceCharge}</span>
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    {
                                        user
                                            ? <div onClick={() => handleApply(scholarship)} className="card-actions mt-6">
                                                <button className="btn btn-primary w-full text-lg font-bold text-white transition-all hover:scale-105">
                                                    Apply Now
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                                </button>
                                            </div>
                                            : <div className="card-actions mt-6">
                                                <Link to={"/login"} className="btn bg-red-500 w-full text-lg font-bold text-white transition-all hover:scale-105">
                                                    Pleace Login to Apply!!
                                                </Link>
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* review */}
            <div>
                <ReviewForm scholarship={scholarship}></ReviewForm>
            </div>
            <div >
                <ReviewSections scholarship={scholarship}></ReviewSections>
            </div>
        </div>
    );
};

export default ScholershipDetails;