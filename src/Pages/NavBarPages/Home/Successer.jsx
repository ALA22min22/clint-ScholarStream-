import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { motion } from "framer-motion";
import Loading from '../../../component/Loading';

const Successer = () => {
    const publicAxios = axios.create({
        baseURL: "https://scolership-server.vercel.app0"
    });

    const { data: success = [], isLoading } = useQuery({
        queryKey: ["story"],
        queryFn: async () => {
            const res = await publicAxios.get("/story");
            return res.data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    //fremer motion:
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
    };

    console.log(success)

    return (
        <div>
            <motion.div variants={container}
                initial="hidden"
                animate="show">
                {
                    success.map(story => <motion.div variants={item} key={story._id} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                        <figure className="px-5 pt-8">
                            <div className="avatar">
                                <motion.div whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }} className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={story.student_image} alt={story.student_name} />
                                </motion.div>
                            </div>
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold text-gray-800">{story.student_name}</h2>

                            <div className="badge badge-secondary badge-outline font-semibold my-2 p-3 text-center h-auto">
                                {story.university_name}
                            </div>

                            <section>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-primary mb-3">Scholarship Success Stories</h2>
                                    <p className="text-lg text-gray-600">Real stories from our successful students</p>
                                </div>
                                <p >{story.success_story}</p>
                            </section>


                        </div>
                    </motion.div>)


                }
            </motion.div>

        </div>
    );
};

export default Successer;