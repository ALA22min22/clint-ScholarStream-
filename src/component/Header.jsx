import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import UseAuth from '../Pages/Hooks/UseAuth';
import { motion } from "framer-motion";




const Header = () => {
    const { user, logOuth } = UseAuth();
    const navigate = useNavigate();
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
    const handleLogout = () => {
        logOuth()
            .then(() => {
                // alert("user logout sucessfull", result)
                navigate("/login")
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
            <div className="navbar-end gap-2  ">
                <div className='mr-5'>
                    {
                        user &&
                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className=""><img className='w-[45px] h-[45px] rounded-full' src={user.photoURL} alt="" /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 text-black shadow-sm">
                                <li><Link to={"/dashboard/myProfile"} className='btn hover:bg-primary hover:text-white'>Dashboard</Link></li>
                                <li><a onClick={handleLogout} className="  btn hover:bg-primary hover:text-white">LogOut</a></li>
                            </ul>
                        </div>
                    }
                </div>
                {
                    user ? "" : <><Link to={'/login'}><a className="btn btn-primary text-white"> <motion.p whileHover={{ scale: 1.2, y: -10 }}
                        transition={{ type: "spring", stiffness: 200 }} >LogIn</motion.p> </a></Link>
                        <Link to={"/register"} className="btn btn-primary text-white"> <motion.p whileHover={{ scale: 1.2, y: -10 }}
                        transition={{ type: "spring", stiffness: 200 }} >Register</motion.p> </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Header;