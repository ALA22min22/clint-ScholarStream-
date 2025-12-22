import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">

            {/* Background Style */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

                {/* right side */}
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20 max-w-7xl mx-auto px-4">


                <div className="flex-1 relative z-10">
                    <img
                        src="https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink-background_141793-46714.jpg?w=900"
                        className="w-full max-w-md rounded-lg shadow-none lg:shadow-2xl mask mask-squircle lg:mask-square object-cover"
                        alt="Happy Student"
                    />

                    <div className="absolute bottom-10 -left-6 bg-white p-3 rounded-xl shadow-lg animate-bounce hidden lg:block">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🎓</span>
                            <div>
                                <p className="text-xs font-bold text-gray-500">Scholarships</p>
                                <p className="font-bold text-primary">2000+ Available</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Left Side: Content --- */}
                <div className="flex-1 text-left space-y-6 z-10">

                    {/* Top Label */}
                    <p className="text-primary font-bold tracking-widest text-sm uppercase">
                        Find Your Future
                    </p>

                    {/* Main Title */}
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                        Find the Right <br />
                        <span className="text-primary">Scholarship</span> for You
                    </h1>

                    {/* Description */}
                    <p className="py-2 text-gray-500 text-lg max-w-lg">
                        Apply to the scholarships at top universities.
                        Whether in-person or online degrees, we have it all.
                    </p>

                    {/* Search */}
                    <div className="bg-white p-2 rounded-full shadow-lg max-w-lg border border-gray-100 flex items-center">
                        <IoSearchOutline className='w-6 h-6 ml-2' />
                        <input
                            type="text"
                            placeholder="Search by University, Country..."
                            className="input input-ghost w-full focus:bg-transparent focus:text-gray-700 placeholder-gray-400"
                        />
                        <button className="btn btn-primary rounded-full px-6 text-white">
                            Search
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HeroSection;