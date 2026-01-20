import React from 'react';
import { Link } from 'react-router';
import { FaRocket, FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
    return (
        <section className="mt-10">
            <div className="">
                
                {/* Main Card */}
                <div className="
                
                before:bg-gradient-to-bl from-sky-200 via-yellow-400 to-orange-700 before:top-0 overflow-hidden   bg-gradient-to-r from-blue-50 to-white relative overflow-hidden
                
                
                
                rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-center">
                        
                        {/* Left Side: Content */}
                        <div className="p-10 lg:p-16 w-full lg:w-3/5 text-center lg:text-left z-10">
                            
                            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                                Ready to Start Your <br/>
                                <span className="text-primary">Scholarship Journey?</span>
                            </h2>
                            
                            <p className="text-black text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                                Join over 15,000+ students who secured fully funded scholarships through Scholar Stream. Your dream university is just one click away.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {/* Primary Button */}
                                <Link to="/allScholarship">
                                    <button className="btn btn-primary btn-lg rounded-full px-8 font-bold text-white hover:scale-105 transition-transform flex items-center gap-2 w-full sm:w-auto">
                                        Explore Scholarships <FaRocket />
                                    </button>
                                </Link>

                                {/* Secondary Button */}
                                <Link to="/register">
                                    <button className="btn btn-outline btn-lg rounded-full px-8 text-white border-white hover:bg-white hover:text-primary hover:border-white transition-all w-full sm:w-auto">
                                        Join for Free <FaArrowRight />
                                    </button>
                                </Link>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 opacity-80">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar border-none">
                                        <div className="w-8">
                                            <img src="https://img.freepik.com/free-photo/young-female-student-holding-notebooks_23-2148763784.jpg" alt="student" />
                                        </div>
                                    </div>
                                    <div className="avatar border-none">
                                        <div className="w-8">
                                            <img src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg" alt="student" />
                                        </div>
                                    </div>
                                    <div className="avatar border-none">
                                        <div className="w-8">
                                            <img src="https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980026.jpg" alt="student" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-black text-sm font-medium">Trusted by 2000+ students this month</span>
                            </div>
                        </div>

                        {/* Right Side: Image/Illustration */}
                        <div className="w-full lg:w-2/5 relative h-64 lg:h-auto flex items-end justify-center">
                            {/* Decorative Circle */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                            
                            {/* Image - Ensure you have a transparent PNG for best result */}
                            <img 
                                src="https://i.ibb.co.com/mCXZbtfy/Pix-Verse-Image-Effect-prompt-Ready-to-Start-Yo.jpg" 
                                alt="Happy Student" 
                                className="relative z-10 w-80 lg:w-full max-w-sm object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl shadow-2xl"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;