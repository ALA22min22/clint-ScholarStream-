import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;