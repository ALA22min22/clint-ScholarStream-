import React from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const Blogs = () => {

    const blogPosts = [
        {
            id: 1,
            title: "How to Write a Winning Statement of Purpose (SOP)",
            excerpt: "Your SOP is the heart of your application. Learn the do's and don'ts from scholarship winners to make your profile stand out.",
            image: "https://img.freepik.com/free-photo/student-studying-library_23-2149013624.jpg",
            date: "July 24, 2024",
            author: "Admin",
            category: "Tips & Guide"
        },
        {
            id: 2,
            title: "Top 5 Countries Offering Full Free Scholarships",
            excerpt: "Looking for fully funded opportunities? Explore these 5 countries that provide 100% tuition waivers and living stipends.",
            image: "https://img.freepik.com/free-photo/group-international-students-holding-notebooks_1150-14285.jpg",
            date: "Aug 10, 2024",
            author: "Editor",
            category: "Destinations"
        },
        {
            id: 3,
            title: "Ace Your Student Visa Interview: A Complete Guide",
            excerpt: "Nervous about the embassy interview? Here are the most common questions asked by visa officers and how to answer them.",
            image: "https://img.freepik.com/free-photo/business-people-meeting-office-writing-memos-sticky-notes_1262-3591.jpg",
            date: "Sept 05, 2024",
            author: "Admin",
            category: "Visa Help"
        }
    ];

    return (
        <section className="">
            <div className="">
                
                {/* Header */}
                <div className="text-center my-10">
                    <span className="text-primary font-bold tracking-wider uppercase text-5xl">
                        Our Blog
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl mt-2 mb-4">
                        Latest News & <span className="text-primary">Resources</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Stay updated with the latest scholarship trends, application hacks, and study abroad guides.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden"
                        >
                            {/* Image Section */}
                            <figure className="relative h-60 overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="badge badge-primary badge-lg text-white rounded-md border-none shadow-md">
                                        {post.category}
                                    </span>
                                </div>
                            </figure>

                            {/* Content Section */}
                            <div className="card-body p-6">
                                {/* Meta Data */}
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-primary" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaUser className="text-primary" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="card-title text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More Button */}
                                <div className="card-actions justify-start mt-auto">
                                    <button className="btn btn-link px-0 text-primary no-underline hover:text-primary-focus flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read More <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

    
            </div>
        </section>
    );
};

export default Blogs;