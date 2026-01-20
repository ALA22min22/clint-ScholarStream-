import React from 'react';
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {

    const reviews = [
        {
            id: 1,
            name: "Sarah Ahmed",
            image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
            university: "Oxford University",
            country: "UK",
            review: "Scholar Stream made the impossible possible. I found a fully funded scholarship for my Masters in UK. The guidance on SOP writing was a game changer!",
            rating: 5,
            date: "Sep 2023"
        },
        {
            id: 2,
            name: "John Doe",
            image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
            university: "University of Toronto",
            country: "Canada",
            review: "The filter options are amazing. I didn't have to waste time looking at scholarships I wasn't eligible for. Highly recommended for every student.",
            rating: 5,
            date: "Jan 2024"
        },
        {
            id: 3,
            name: "Ayesha Khan",
            image: "https://img.freepik.com/free-photo/portrait-young-student-with-book-education-day_23-2150980026.jpg",
            university: "Monash University",
            country: "Australia",
            review: "I was confused about the visa process. The blogs and community support here helped me clear all my doubts. Now I am studying in Melbourne!",
            rating: 4,
            date: "Oct 2023"
        },
        {
            id: 4,
            name: "Michael Chen",
            image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt_273609-11360.jpg",
            university: "Stanford University",
            country: "USA",
            review: "Getting into Stanford was a dream. This platform helped me find a partial scholarship that covered my tuition fees. Truly grateful.",
            rating: 5,
            date: "Dec 2023"
        },
        {
            id: 5,
            name: "Fatima Tuj Zohra",
            image: "https://img.freepik.com/free-photo/young-woman-wearing-hijab-posing-studio_23-2149206782.jpg",
            university: "University of Malaya",
            country: "Malaysia",
            review: "Best platform for Asian students. I found many opportunities for Malaysia and Japan here which are rarely listed elsewhere.",
            rating: 5,
            date: "Feb 2024"
        },
        {
            id: 6,
            name: "David Smith",
            image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
            university: "TU Munich",
            country: "Germany",
            review: "Documentation was my biggest fear. The checklist provided by Scholar Stream kept me organized throughout the application process.",
            rating: 4,
            date: "Nov 2023"
        }
    ];

    return (
        <section className="">
            <div className="">
                
                {/* Header */}
                <div className="text-center my-10">
                    
                    <h2 className="text-5xl uppercase font-bold text-primary sm:text-5xl mb-4">
                        What Our Students Say
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from students who have secured scholarships through our platform.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                        >
                            {/* Quote Icon Background */}
                            <FaQuoteLeft className="absolute top-6 right-6 text-6xl text-gray-100 -z-0" />

                            <div className="relative z-10">
                                {/* Rating Stars */}
                                <div className="flex text-yellow-400 mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-600 mb-6 italic leading-relaxed">
                                    "{review.review}"
                                </p>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.image} alt={review.name} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-500">{review.university}, {review.country}</p>
                                </div>
                            </div>

                            {/* Date Badge */}
                            <div className="absolute bottom-8 right-8 text-xs text-gray-300 font-medium">
                                {review.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;