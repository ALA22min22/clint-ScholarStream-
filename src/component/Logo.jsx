import React from 'react';
import ProjectLogo from "../assets/logo-search-grid-2x-Picsart-BackgroundRemover.png"

const Logo = () => {
    return (
        <div className='flex flex-col  lg:flex-row items-center'>
            <img className='w-[120px] ' src={ProjectLogo} alt="" />
            <p className=' font-bold lg:-ml-5 flex flex-row lg:flex-col'><span className=' lg:text-4xl text-blue-800'>Scholar</span><span className=''>Stream</span></p>
        </div>
    );
};

export default Logo;