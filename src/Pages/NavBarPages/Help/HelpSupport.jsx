import React from 'react';
import { FaSearch, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import ContactWithFAQ from '../Home/ContactWithFAQ';

const HelpSupport = () => {
    return (
        <div className=" min-h-screen font-sans">
            
            {/* 1. Hero Section with Search */}
            <section className="bg-primary text-primary-content py-20 px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-4xl uppercase font-bold">How can we help you?</h1>
                    <p className="text-lg opacity-90">Browse our FAQs, or contact our support team directly.</p>
                    
                </div>
            </section>

            {/* 2. Quick Contact Options */}
            <section className="max-w-7xl mx-auto px-4 -mt-10 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email Card */}
                    <div className="card bg-base-100 shadow-xl border-t-4 border-blue-500 hover:scale-105 transition-transform">
                        <div className="card-body items-center text-center">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-2">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <h3 className="card-title">Email Support</h3>
                            <p className="text-gray-500 text-sm">Get a response within 24 hours.</p>
                            <p className="font-bold mt-2">2213081052@uttarauniversity.edu.bd</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="card bg-base-100 shadow-xl border-t-4 border-green-500 hover:scale-105 transition-transform">
                        <div className="card-body items-center text-center">
                            <div className="p-3 bg-green-100 text-green-600 rounded-full mb-2">
                                <FaPhoneAlt className="text-2xl" />
                            </div>
                            <h3 className="card-title">Call Us</h3>
                            <p className="text-gray-500 text-sm">Mon-Fri from 9am to 6pm.</p>
                            <p className="font-bold mt-2">+880 1911 508 715</p>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="card bg-base-100 shadow-xl border-t-4 border-purple-500 hover:scale-105 transition-transform">
                        <div className="card-body items-center text-center">
                            <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-2">
                                <FaMapMarkerAlt className="text-2xl" />
                            </div>
                            <h3 className="card-title">Visit Us</h3>
                            <p className="text-gray-500 text-sm">Come say hello at our office HQ.</p>
                            <p className="font-bold mt-2">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className=''>
                <ContactWithFAQ></ContactWithFAQ>
            </div>

        </div>
    );
};

export default HelpSupport;