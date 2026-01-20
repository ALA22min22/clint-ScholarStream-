import React from 'react';
import { FaShieldAlt, FaCheckCircle, FaHandshake, FaUniversity } from "react-icons/fa";

const EducationTrust = () => {

    // Trust Features Data
    const trustFeatures = [
        {
            id: 1,
            title: "100% Verified Listings",
            desc: "We directly collaborate with universities to ensure every scholarship listed is authentic and active.",
            icon: <FaCheckCircle className="w-8 h-8" />
        },
        {
            id: 2,
            title: "Secure Data Privacy",
            desc: "Your academic documents and personal data are encrypted and never shared without consent.",
            icon: <FaShieldAlt className="w-8 h-8" />
        },
        {
            id: 3,
            title: "Official Partners",
            desc: "Recognized by top global education boards and authorized by 500+ universities worldwide.",
            icon: <FaHandshake className="w-8 h-8" />
        }
    ];

    // Dummy University Logos (Text/Icon based for demo, replace with real Img later)
    const partners = [
        { name: "Harvard University", location: "USA" },
        { name: "University of Oxford", location: "UK" },
        { name: "University of Toronto", location: "Canada" },
        { name: "Monash University", location: "Australia" },
        { name: "ETH Zurich", location: "Switzerland" },
        { name: "University of Tokyo", location: "Japan" }
    ];

    return (
        <section className="">
            <div className="">
                
                {/* --- Part 1: University Partners --- */}
                <div className="text-center mt-10">
                    <p className="text-5xl font-bold text-primary  uppercase mb-10">Trusted by Global Education Leaders</p>
                    
                    {/* Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-80">
                        {partners.map((partner, index) => (
                            <div 
                                key={index} 
                                className="group flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            >
                                {/* Placeholder Icon for Logo */}
                                <FaUniversity className="text-5xl text-gray-300 group-hover:text-primary mb-2 transition-colors duration-300" />
                                <h3 className="text-sm font-bold text-gray-400 group-hover:text-gray-800 transition-colors duration-300 text-center">
                                    {partner.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Divider --- */}
                <div className="divider my-10 text-primary">Our Commitment</div>

                {/* --- Part 2: Trust Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {trustFeatures.map((feature) => (
                        <div 
                            key={feature.id} 
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EducationTrust;