import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../component/Header';
import auth from "../../assets/auth.png";


const AuthenticationLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex border justify-center items-start  w-4xl mx-auto mt-15'>
                <div className='h-full'>
                    <Outlet></Outlet>
                </div>
                <div>
                    <img src={auth} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthenticationLayout;