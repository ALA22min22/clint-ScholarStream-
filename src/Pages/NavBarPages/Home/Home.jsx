import React from 'react';
import HeroSection from './HeroSection';
import TopScholerShip from './TopScholerShip';
import { Link } from 'react-router';
import ContactWithFAQ from './ContactWithFAQ';

const Home = () => {
    return (
        <div>
            <div>
                <HeroSection></HeroSection>
            </div>
            <div>
                <TopScholerShip></TopScholerShip>
            </div>
            <div>
                <div className=' p-5 text-center my-10 before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700  bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl'>
                    <h3 className="text-5xl font-bold">The Real Scholarship <span className='font-extrabold text-primary'>Successer</span></h3>
                    <p className='text-3xl font-semibold my-5'>Scholar Stream has already guided over 26 million students and families to scholarships. Will you be the next success story?</p>

                    <Link to={"/successer"}>
                    {/* button */}
                    <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">

                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                        <p class="z-10">See More Successer</p>
                    </button>
                    </Link>


                </div>
            </div>
            <div>
                <ContactWithFAQ></ContactWithFAQ>
            </div>
        </div>
    );
};

export default Home;