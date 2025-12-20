import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { MdOutlineCancelScheduleSend } from 'react-icons/md';

const PaymentCancelled = () => {
    const [searchParams] = useSearchParams();
    const [cancelledData, setCancelledData] = useState({})
    const sessionId = searchParams.get('session_id');
    console.log(sessionId)
    const axiosSecure = UseAxiosSequre();

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-cancelled?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setCancelledData(res.data)
                })
        }
    }, [sessionId, axiosSecure, setCancelledData])

    return (
        <div className=''>

            <div className="min-h-screen flex items-center justify-center bg-base-200 p-4 ">

                <div className="card w-full max-w-md bg-base-100 shadow-xl border border-red-100">
                    <div className="card-body text-center items-center">

                        {/* rounded error icon into the circle */}
                        <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center mb-4 animate-pulse">
                            <MdOutlineCancelScheduleSend className='text-4xl' />
                        </div>

                        {/* faild and error message */}
                        <h2 className="card-title text-2xl text-red-600 font-bold mb-1">
                            {cancelledData.message}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {cancelledData.error}
                        </p>

                        {/* single nicher border */}
                        <div className="divider my-2"></div>

                        {/* Transaction Details */}
                        <div className="w-full space-y-3 text-left bg-base-200/50 p-4 rounded-lg">

                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Scholarship</p>
                                <p className="font-bold text-gray-700">{cancelledData.scholarshipName}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase font-semibold">Transaction ID</p>
                                <p className="font-mono text-sm text-gray-600 break-all">
                                    {cancelledData.applicationId}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="card-actions justify-center w-full mt-6">
                            <Link to={"/dashboard/myApplications"}><button className="btn btn-error text-white w-full">
                                Return to Dashboard
                            </button></Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentCancelled;