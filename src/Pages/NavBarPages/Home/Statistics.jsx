import React from 'react';
import { FaUserGraduate, FaUniversity, FaGlobeAmericas, FaMoneyBillWave } from 'react-icons/fa';

const Statistics = () => {
    
    // Stats Data Object
    const statsData = [
        {
            id: 1,
            title: "Successful Students",
            count: "15,000+",
            icon: <FaUserGraduate className="w-10 h-10" />,
            desc: "Students got their dream scholarship"
        },
        {
            id: 2,
            title: "Total Universities",
            count: "1,200+",
            icon: <FaUniversity className="w-10 h-10" />,
            desc: "Partner universities worldwide"
        },
        {
            id: 3,
            title: "Countries Covered",
            count: "45+",
            icon: <FaGlobeAmericas className="w-10 h-10" />,
            desc: "Opportunities across the globe"
        },
        {
            id: 4,
            title: "Scholarships Worth",
            count: "$50M+",
            icon: <FaMoneyBillWave className="w-10 h-10" />,
            desc: "Total funding awarded to students"
        }
    ];

    return (
        <section className="">
            <div className="">
                
                {/* Header Section */}
                <div className="text-center my-10 space-y-4">
                    <p className="text-primary font-bold tracking-widest text-5xl uppercase">Our Impact</p>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl">
                        Empowering Future Leaders
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500">
                        We connect talent with opportunity. Here are the numbers that define our success story.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {statsData.map((stat) => (
                        <div 
                            key={stat.id} 
                            className="relative group bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Icon Background Blob */}
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {stat.icon}
                                </div>

                                {/* Count */}
                                <h3 className="text-4xl font-extrabold text-gray-900 mb-2 font-mono">
                                    {stat.count}
                                </h3>

                                {/* Title */}
                                <p className="text-lg font-bold text-gray-700 mb-2">
                                    {stat.title}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-gray-500">
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;