import React from 'react';
import {  Link, NavLink } from 'react-router';
import Logo from './Logo';
import UseAuth from '../Pages/Hooks/UseAuth';




const Header = () => {
    const {user, logOuth} = UseAuth();
    const links = <>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={'/allScholarship'}>All Scholarship </NavLink></li>
        {/* <li><NavLink to={'/covarage'}>Coverage</NavLink></li>
        <li><NavLink to={'/sendParcel'}>Send Parcel</NavLink></li>
        <li><NavLink to={'/rider'}>Rider</NavLink></li> */}
        {
            user &&
            <li><NavLink to={'/dashboard/myProfile'}>My Profile</NavLink></li>
        }

    </>
    const handleLogout = ()=> {
        logOuth()
        .then(result => {
            alert("user logout sucessfull", result)
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-secondary  text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        {links}
                    </ul>
                </div>
                <a className=" text-xl"><Logo></Logo></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user? <a onClick={handleLogout} className="btn">LogOut</a> : <Link to={'/login'}><a className="btn">LogIn</a></Link>
                }
                {/* <Link to={"/login"} className="btn">LogIn</Link */}
            </div>
        </div>
    );
};

export default Header;