import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../component/Header';
import Footer from '../../Footer';


const AuthenticationLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center my-10'>
              
                    <Outlet></Outlet>
               
                
            </div>
            {/* flex border justify-center items-start  w-4xl mx-auto mt-15 */}
            <Footer></Footer>
        </div>
    );
};

export default AuthenticationLayout;