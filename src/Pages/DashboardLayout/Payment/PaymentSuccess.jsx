import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineDone } from 'react-icons/md';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [successData, setSuccessData] = useState({});
    const sessionId = searchParams.get('session_id');
    console.log(sessionId);
    const axiosSecure = UseAxiosSequre();

    //get to the payment collections:
    const { data: successDetails = [] } = useQuery({
        queryKey: ["payment-success", successData?.transactionId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-success/${successData.transactionId}`);
            return res.data
        }
    })


    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log("rechived payment success data:", res.data);
                    setSuccessData(res.data);
                })
        }
    }, [sessionId])

    return (
        <div >
            <div className="min-h-screen flex items-center justify-center bg-base-200 p-15 ">

                <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-red-100">
                    <div className="card-body text-center items-center">

                        {/* rounded success icon into the circle  */}
                        <div className="w-25 h-25 bg-green-200 rounded-full flex items-center justify-center mb-4 animate-bounce">
                            
                            <MdOutlineDone className='text-6xl text-green-700' />
                        </div>

                        {/* success message */}
                        <h2 className=" text-3xl text-black font-bold ">
                            Payment Successful!
                        </h2>
                        <p className="text-gray-500 text-[10px] ">Thank you, your payment has been processed.</p>
                        <p className="text-green-400 mt-5 text-6xl font-bold">
                            ${successDetails.amount}
                        </p>

                        {/* single nicher border */}
                        <div className="divider my-2"></div>

                        {/* Transaction and scholershif info */}
                        <div className="w-full space-y-3 text-left bg-base-200/50 p-4 rounded-lg">

                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Scholarship</p>
                                <p className="font-bold text-gray-700">{successDetails.scholarshipName}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">University</p>
                                <p className="font-bold text-gray-700">{successDetails.universityName}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Transaction ID</p>
                                <p className="font-mono text-sm text-gray-600 break-all">
                                    {successDetails.applicationId}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Date</p>
                                <p className=" text-gray-700">{successDetails.paidAt}</p>
                            </div>
                        </div>

                        {/* user email */}
                        <p className=" text-xs text-gray-400 mt-4">
                            A confirmation email has been sent to <span className="font-semibold text-gray-600">{successDetails.customerEmail}</span>
                        </p>

                        {/* Action Buttons */}
                        <div className=" text-white justify-center w-full mt-6">
                            <Link to={"/dashboard/myApplications"}><button className="btn btn-success text-white w-full">
                                Go to My Applications
                            </button></Link>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default PaymentSuccess;