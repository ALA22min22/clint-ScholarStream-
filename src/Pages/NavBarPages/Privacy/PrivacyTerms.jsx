import React, { useState } from 'react';
import { FaShieldAlt, FaFileContract, FaLock, FaUserCheck, FaExclamationCircle } from "react-icons/fa";

const PrivacyTerms = () => {
    // Tab State Management
    const [activeTab, setActiveTab] = useState('privacy'); // 'privacy' or 'terms'

    return (
        <div className="bg-base-100 min-h-screen font-sans text-gray-700">
            
            {/* 1. Page Header */}
            <div className="bg-base-200 py-12 px-4 text-center">
                <h1 className="text-5xl font-bold text-primary uppercase mb-2">Legal Center</h1>
                <p className="text-gray-500">Last updated: January 20, 2026</p>
                <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                    At <span className="font-bold text-primary">Scholar Stream</span>, we are committed to transparency. Please read our policies carefully to understand how we operate.
                </p>
            </div>

            {/* 2. Toggle Tabs */}
            <div className="flex justify-center -mt-8 mb-10">
                <div className="tabs tabs-boxed p-2 bg-white shadow-lg rounded-full">
                    <a 
                        onClick={() => setActiveTab('privacy')}
                        className={`tab tab-lg rounded-full gap-2 transition-all duration-300 ${activeTab === 'privacy' ? 'tab-active bg-primary text-white' : ''}`}
                    >
                        <FaShieldAlt /> Privacy Policy
                    </a>
                    <a 
                        onClick={() => setActiveTab('terms')}
                        className={`tab tab-lg rounded-full gap-2 transition-all duration-300 ${activeTab === 'terms' ? 'tab-active bg-primary text-white' : ''}`}
                    >
                        <FaFileContract /> Terms of Service
                    </a>
                </div>
            </div>

            {/* 3. Main Content Area */}
            <div className="max-w-4xl mx-auto px-4 pb-10">
                
                {/* ---------------- PRIVACY POLICY CONTENT ---------------- */}
                {activeTab === 'privacy' && (
                    <div className="animate-fade-in space-y-8">
                        {/* Section 1 */}
                        <div className="card bg-base-100 shadow-md border border-gray-100 p-8">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-4">
                                <FaLock className="text-primary" /> 1. Information We Collect
                            </h2>
                            <p className="mb-4">
                                To provide you with the best scholarship opportunities, we collect the following types of information:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Personal Information:</strong> Name, email address, profile photo, and educational background provided during registration.</li>
                                <li><strong>Usage Data:</strong> Information on how you interact with the website, such as scholarships viewed and saved.</li>
                                <li><strong>Device Data:</strong> IP address, browser type, and operating system for security purposes.</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="card bg-base-100 shadow-md border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Data</h2>
                            <p>We use the collected data for the following purposes:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                                <li>To verify your identity and manage your account.</li>
                                <li>To recommend scholarships relevant to your profile.</li>
                                <li>To send important updates regarding application deadlines.</li>
                                <li>To improve our website functionality and user experience.</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="card bg-base-100 shadow-md border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Data Security</h2>
                            <p>
                                We implement industry-standard security measures (SSL encryption, secure database storage) to protect your personal information. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </div>
                    </div>
                )}


                {/* ---------------- TERMS OF SERVICE CONTENT ---------------- */}
                {activeTab === 'terms' && (
                    <div className="animate-fade-in space-y-8">
                        {/* Section 1 */}
                        <div className="card bg-base-100 shadow-md border border-gray-100 p-8">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-4">
                                <FaUserCheck className="text-primary" /> 1. User Responsibilities
                            </h2>
                            <p>By using Scholar Stream, you agree to the following:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                                <li>You must provide accurate and truthful information in your profile and applications.</li>
                                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                                <li>You will not use the platform for any illegal or unauthorized purpose.</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="card bg-base-100 shadow-md border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, graphics, logos, and software, is the property of <strong>Scholar Stream</strong> and is protected by copyright laws. You may not reproduce or redistribute any content without our written permission.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="card bg-base-100 shadow-md border border-gray-100 p-8">
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-4">
                                <FaExclamationCircle className="text-red-500" /> 3. Limitation of Liability
                            </h2>
                            <p>
                                Scholar Stream acts as an aggregator for scholarship information. We do not guarantee that you will receive a scholarship. We are not liable for any losses or damages arising from the use of our service or reliance on information provided on the site.
                            </p>
                        </div>
                    </div>
                )}

            </div>

            {/* 4. Contact Footer */}
            <div className="bg-base-200 pt-10 text-center">
                <p className="text-gray-600">
                    Have specific questions about our legal policies? <br />
                    <a href="mailto:legal@scholarstream.com" className="link link-primary font-bold">2213081052@uttarauniversity.edu.bd</a>
                </p>
            </div>

        </div>
    );
};

export default PrivacyTerms;