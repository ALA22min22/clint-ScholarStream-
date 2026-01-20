// import React from 'react';
// import { IoSearchOutline } from 'react-icons/io5';

// const HeroSection = () => {
//     return (
//         <div className="hero min-h-screen bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">

//             {/* Background Style */}
//             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

//                 {/* right side */}
//             <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 max-w-7xl mx-auto px-4">


//                 <div className="flex-1 relative z-10">
//                     <img
//                         src="https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink-background_141793-46714.jpg?w=900"
//                         className="w-full max-w-md rounded-lg shadow-none lg:shadow-2xl mask mask-squircle lg:mask-square object-cover"
//                         alt="Happy Student"
//                     />

//                     <div className="absolute bottom-10 -left-6 bg-white p-3 rounded-xl shadow-lg animate-bounce hidden lg:block">
//                         <div className="flex items-center gap-2">
//                             <span className="text-2xl">🎓</span>
//                             <div>
//                                 <p className="text-xs font-bold text-gray-500">Scholarships</p>
//                                 <p className="font-bold text-primary">2000+ Available</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Left Side: Content --- */}
//                 <div className="flex-1 text-left space-y-6 z-10">

//                     {/* Top Label */}
//                     <p className="text-primary font-bold tracking-widest text-sm uppercase">
//                         Find Your Future
//                     </p>

//                     {/* Main Title */}
//                     <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
//                         Find the Right <br />
//                         <span className="text-primary">Scholarship</span> for You
//                     </h1>

//                     {/* Description */}
//                     <p className="py-2 text-gray-500 text-lg max-w-lg">
//                         Apply to the scholarships at top universities.
//                         Whether in-person or online degrees, we have it all.
//                     </p>

//                     {/* Search */}
//                     <div className="bg-white p-2 rounded-full shadow-lg max-w-lg border border-gray-100 flex items-center">
//                         <IoSearchOutline className='w-6 h-6 ml-2' />
//                         <input
//                             type="text"
//                             placeholder="Search by University, Country..."
//                             className="input input-ghost w-full focus:bg-transparent focus:text-gray-700 placeholder-gray-400"
//                         />
//                         <button className="btn btn-primary rounded-full px-6 text-white">
//                             Search
//                         </button>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { BsArrowDown } from "react-icons/bs"; // For the scroll indicator
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
    // Slider Logic
    const images = [
        "https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink-background_141793-46714.jpg?w=900",
        "https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-sky_53876-56031.jpg?w=900", // Graduation group
        "https://img.freepik.com/free-photo/young-woman-with-books-laptop-outdoors_144627-1229.jpg?w=900" // Studying outdoors
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full bg-gradient-to-r from-blue-50 to-white overflow-hidden">
            
            {/* Height constraint: 70vh on desktop, auto on mobile */}
            <div className="min-h-[600px] lg:h-[70vh] flex items-center justify-center relative">

                {/* Background Blob Style */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

                {/* Main Content Wrapper */}
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 max-w-7xl mx-auto px-4 w-full">

                    {/* --- Right Side: Image Slider --- */}
                    <div className="flex-1 relative z-10 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md h-[300px] lg:h-[400px]">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 w-full h-full rounded-lg shadow-none lg:shadow-2xl mask mask-squircle lg:mask-square object-cover"
                                    alt="Scholarship Student"
                                />
                            </AnimatePresence>

                            {/* Floating Badge (Kept as requested) */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg hidden lg:block z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">🎓</span>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500">Scholarships</p>
                                        <p className="font-bold text-primary">2000+ Available</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* --- Left Side: Content --- */}
                    <div className="flex-1 text-left space-y-6 z-10">

                        {/* Top Label with Animation */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-primary font-bold tracking-widest text-sm uppercase"
                        >
                            Find Your Future
                        </motion.p>

                        {/* Main Title with Animation */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
                        >
                            Find the Right <br />
                            <span className="text-primary">Scholarship</span> for You
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="py-2 text-gray-500 text-lg max-w-lg"
                        >
                            Apply to the scholarships at top universities.
                            Whether in-person or online degrees, we have it all.
                        </motion.p>

                        {/* Search / CTA */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white p-2 rounded-full shadow-lg max-w-lg border border-gray-100 flex items-center transform transition-transform hover:scale-105"
                        >
                            <IoSearchOutline className='w-6 h-6 ml-2 text-gray-400' />
                            <input
                                type="text"
                                placeholder="Search by University, Country..."
                                className="input input-ghost w-full focus:bg-transparent focus:text-gray-700 placeholder-gray-400 border-none focus:outline-none"
                            />
                            <button className="btn btn-primary rounded-full px-6 text-white hover:shadow-lg transition-all">
                                Search
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* --- Scroll Down Indicator (Visual Flow) --- */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center cursor-pointer"
                >
                    <span className="text-xs mb-1">Scroll Down</span>
                    <BsArrowDown className="text-xl text-primary" />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;