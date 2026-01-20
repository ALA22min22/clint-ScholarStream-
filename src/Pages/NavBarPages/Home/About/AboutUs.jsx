import React from 'react';
import { FaGraduationCap, FaGlobeAmericas, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="bg-base-100 text-base-content font-sans">
            
            {/* 1. Hero Section */}
            <section className="relative bg-base-200 py-10 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-primary font-bold tracking-wide uppercase mb-2 text-5xl">About Scholar Stream</p>
                    <h1 className="text-3xl md:text-3xl font-extrabold mb-6 leading-tight">
                        Bridging the Gap Between <br className="hidden md:block" />
                        <span className="text-blue-600">Talent & Opportunity</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We believe financial constraints should never stop a brilliant mind from reaching its full potential. Scholar Stream is your dedicated partner in finding fully funded global opportunities.
                    </p>
                </div>
            </section>

            {/* 2. Our Mission (Split Layout) */}
            <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
                        <img 
                            src="https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg" 
                            alt="Students Discussing" 
                            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                        />
                    </div>
                    
                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-5xl text-primary uppercase font-bold">Our Mission & Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2024, Scholar Stream started with a simple idea: making scholarship information accessible to everyone. We noticed that thousands of scholarships go unclaimed simply because students don't know about them.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our platform aggregates verified scholarship data from universities worldwide, simplifying the application process. We are committed to creating a world where education borders do not exist.
                        </p>
                        
                        <div className="flex gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <FaLightbulb className="text-yellow-500 text-xl" />
                                <span className="font-semibold">Innovation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGlobeAmericas className="text-blue-500 text-xl" />
                                <span className="font-semibold">Global Reach</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats Section (DaisyUI Stats) */}
            <section className="bg-primary text-primary-content py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-white text-gray-800 w-full rounded-2xl">
                        
                        <div className="stat place-items-center">
                            <div className="stat-title font-medium text-gray-500">Scholarships Listed</div>
                            <div className="stat-value text-primary">5,000+</div>
                            <div className="stat-desc">Updated Daily</div>
                        </div>
                        
                        <div className="stat place-items-center">
                            <div className="stat-title font-medium text-gray-500">Successful Students</div>
                            <div className="stat-value text-secondary">12,000+</div>
                            <div className="stat-desc">From 50+ Countries</div>
                        </div>
                        
                        <div className="stat place-items-center">
                            <div className="stat-title font-medium text-gray-500">University Partners</div>
                            <div className="stat-value text-accent">350+</div>
                            <div className="stat-desc">Top Ranked Uni</div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us (Cards) */}
            <section className="py-10 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-primary uppercase mb-4">Why Choose Scholar Stream?</h2>
                    <p className="text-gray-500">We provide features that make your journey easier.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="card bg-base-100 shadow-xl border border-gray-100 hover:border-primary transition-colors duration-300">
                        <div className="card-body items-center text-center">
                            <div className="p-4 bg-blue-100 rounded-full text-blue-600 mb-2">
                                <FaGraduationCap className="text-3xl" />
                            </div>
                            <h3 className="card-title">Verified Listings</h3>
                            <p className="text-gray-500 text-sm">Every scholarship posted is manually verified by our team to ensure authenticity.</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="card bg-base-100 shadow-xl border border-gray-100 hover:border-primary transition-colors duration-300">
                        <div className="card-body items-center text-center">
                            <div className="p-4 bg-green-100 rounded-full text-green-600 mb-2">
                                <FaUsers className="text-3xl" />
                            </div>
                            <h3 className="card-title">Community Support</h3>
                            <p className="text-gray-500 text-sm">Join a community of like-minded students to share tips and review essays.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="card bg-base-100 shadow-xl border border-gray-100 hover:border-primary transition-colors duration-300">
                        <div className="card-body items-center text-center">
                            <div className="p-4 bg-purple-100 rounded-full text-purple-600 mb-2">
                                <FaLightbulb className="text-3xl" />
                            </div>
                            <h3 className="card-title">Expert Guidance</h3>
                            <p className="text-gray-500 text-sm">Get access to premium guides on how to write winning statements of purpose.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Team Section (Simple) */}
            <section className="py-10 bg-base-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-5xl uppercase text-primary font-bold mb-10">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg" alt="Member" />
                                </div>
                            </div>
                            <h4 className="font-bold text-lg">Alex Johnson</h4>
                            <p className="text-sm text-gray-500">Founder & CEO</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="Member" />
                                </div>
                            </div>
                            <h4 className="font-bold text-lg">Sarah Williams</h4>
                            <p className="text-sm text-gray-500">Head of Operations</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="Member" />
                                </div>
                            </div>
                            <h4 className="font-bold text-lg">Michael Brown</h4>
                            <p className="text-sm text-gray-500">Senior Developer</p>
                        </div>
                        {/* Team Member 4 */}
                        <div className="flex flex-col items-center">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg" alt="Member" />
                                </div>
                            </div>
                            <h4 className="font-bold text-lg">Emily Davis</h4>
                            <p className="text-sm text-gray-500">Community Manager</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;