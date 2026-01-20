import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";


const ContactWithFAQ = () => {

    const faqData = [
        {
            question: "How do I apply for a scholarship?",
            answer: "Navigate to the scholarship details page and click the 'Apply Now' button. You will be redirected to the official university portal or the application form."
        },
        {
            question: "Are the scholarships fully funded?",
            answer: "It depends on the specific scholarship. Some are fully funded (covering tuition, living costs, and travel), while others are partial. Check the 'Success Story' or details page for specifics."
        },
        {
            question: "Is there an application fee?",
            answer: "Scholar Stream does not charge any fee. However, some universities might have their own application processing fees."
        },
        {
            question: "Can I edit my application after submission?",
            answer: "Once submitted through the university portal, you usually cannot edit. If you applied via our internal form, please contact support immediately."
        },
        {
            question: "How do I track my application status?",
            answer: "You can track your application status from your student dashboard under the 'My Applications' tab."
        }
    ];

    const handleContact = (e) => {
        e.preventDefault();
        toast("Your Message Is Sended")
    }

    return (
        <section id='our-contact' className="">
            <div className="container mx-auto ">

                <div className="text-center my-10">
                    <motion.h2 initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, color: "#f97316" }} className="text-5xl font-bold text-primary uppercase mb-4">Get in Touch</motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about Scholar Stream? Check our FAQ below or send us a message directly. We are here to help you succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <motion.div whileHover={{ scale: 1.2, y: -10 }}
                        transition={{ type: "spring", stiffness: 200 }} className="space-y-4 ">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 px-2">Frequently Asked Questions</h3>

                        {faqData.map((item, index) => (
                            <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300 rounded-box">
                                <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                                <div className="collapse-title text-xl font-medium text-gray-700">
                                    {item.question}
                                </div>
                                <div className="collapse-content text-gray-600">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.2, y: -10 }}
                        transition={{ type: "spring", stiffness: 200 }} className="card w-full bg-white shadow-xl border border-base-300">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold text-primary mb-2">Send us a Message</h3>
                            <p className="text-gray-500 mb-6">We usually respond within 24 hours.</p>

                            <form onSubmit={handleContact}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text font-semibold">Your Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="input input-bordered w-full focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email Address</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text font-semibold">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Scholarship / Technical Issue"
                                        className="input input-bordered w-full focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="form-control mb-6">
                                    <label className="label">
                                        <span className="label-text font-semibold">Message</span>
                                    </label>
                                    <br />
                                    <textarea
                                        className="textarea textarea-bordered h-32 focus:outline-none focus:border-primary"
                                        placeholder="Write your message here..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <motion.button whileHover={{ scale: 1.2, y: -10 }}
                                        transition={{ type: "spring", stiffness: 200 }} className="btn btn-primary text-white text-lg">Send Message</motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ContactWithFAQ;