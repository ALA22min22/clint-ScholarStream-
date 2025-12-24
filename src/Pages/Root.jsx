import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import Footer from '../Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            {/* <div className='max-w-7xl mx-auto'>
                
            </div> */}
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;