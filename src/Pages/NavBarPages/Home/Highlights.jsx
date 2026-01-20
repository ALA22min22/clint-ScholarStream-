import React from 'react';
import { RiVerifiedBadgeFill, RiGlobalLine, RiCustomerService2Fill, RiMoneyDollarCircleLine, RiSearchEyeLine, RiTeamLine } from "react-icons/ri";

const Highlights = () => {

    const features = [
        {
            id: 1,
            title: "Verified Scholarships",
            description: "Every scholarship listed is manually verified to ensure authenticity and prevent scams.",
            icon: <RiVerifiedBadgeFill className="w-8 h-8" />
        },
        {
            id: 2,
            title: "Global Reach",
            description: "Access opportunities from top universities across UK, USA, Canada, Europe, and Australia.",
            icon: <RiGlobalLine className="w-8 h-8" />
        },
        {
            id: 3,
            title: "Smart Search",
            description: "Filter scholarships by subject, country, and funding type to find your perfect match instantly.",
            icon: <RiSearchEyeLine className="w-8 h-8" />
        },
        {
            id: 4,
            title: "No Hidden Fees",
            description: "Our platform is transparent. We provide accurate information about application costs.",
            icon: <RiMoneyDollarCircleLine className="w-8 h-8" />
        },
        {
            id: 5,
            title: "Expert Guidance",
            description: "Get tips on writing SOPs, resumes, and interview prep from scholarship winners.",
            icon: <RiCustomerService2Fill className="w-8 h-8" />
        },
        {
            id: 6,
            title: "Active Community",
            description: "Join thousands of students sharing experiences and helping each other succeed.",
            icon: <RiTeamLine className="w-8 h-8" />
        },
    ];

    return (
        <section className="">
            <div className=" ">
                
                {/* Header Text */}
                <div className="text-center mb-10">
                    <h4 className="text-primary font-bold text-5xl uppercase tracking-wider mb-2">Why Choose Us</h4>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl">
                        Benefits of <span className="text-primary">Scholar Stream</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        We simplify the journey to your dream university with tools and resources designed for your success.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div 
                            key={feature.id} 
                            className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Decorative Background Blob on Hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>

                            <div className="relative z-10">
                                {/* Icon Box */}
                                <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;