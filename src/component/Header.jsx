// import React from 'react';
// import { Link, NavLink, useNavigate } from 'react-router';
// import Logo from './Logo';
// import UseAuth from '../Pages/Hooks/UseAuth';
// import { motion } from "framer-motion";




// const Header = () => {
//     const { user, logOuth } = UseAuth();
//     const navigate = useNavigate();
//     const links = <>
//         <li><NavLink to={"/home"}>Home</NavLink></li>
//         <li><NavLink to={'/allScholarship'}>All Scholarship </NavLink></li>
//         {/* <li><NavLink to={'/covarage'}>Coverage</NavLink></li>
//         <li><NavLink to={'/sendParcel'}>Send Parcel</NavLink></li>
//         <li><NavLink to={'/rider'}>Rider</NavLink></li> */}
//         {
//             user &&
//             <li><NavLink to={'/dashboard/myProfile'}>My Profile</NavLink></li>
//         }

//     </>
//     const handleLogout = () => {
//         logOuth()
//             .then(() => {
//                 // alert("user logout sucessfull", result)
//                 navigate("/login")
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
//     return (
//         <div className="navbar bg-secondary  text-white shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
//                         {links}
//                     </ul>
//                 </div>
//                 <a className=" text-xl"><Logo></Logo></a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end gap-2  ">
//                 <div className='mr-5'>
//                     {
//                         user &&
//                         <div className="dropdown dropdown-end ">
//                             <div tabIndex={0} role="button" className=""><img className='w-[45px] h-[45px] rounded-full' src={user.photoURL} alt="" /></div>
//                             <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 text-black shadow-sm">
//                                 <li><Link to={"/dashboard/myProfile"} className='btn hover:bg-primary hover:text-white'>Dashboard</Link></li>
//                                 <li><a onClick={handleLogout} className="  btn hover:bg-primary hover:text-white">LogOut</a></li>
//                             </ul>
//                         </div>
//                     }
//                 </div>
//                 {
//                     user ? "" : <><Link to={'/login'}><a className="btn btn-primary text-white"> <motion.p whileHover={{ scale: 1.2, y: -10 }}
//                         transition={{ type: "spring", stiffness: 200 }} >LogIn</motion.p> </a></Link>
//                         <Link to={"/register"} className="btn btn-primary text-white"> <motion.p whileHover={{ scale: 1.2, y: -10 }}
//                         transition={{ type: "spring", stiffness: 200 }} >Register</motion.p> </Link>
//                     </>
//                 }

//             </div>
//         </div>
//     );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from './Logo';
import UseAuth from '../Pages/Hooks/UseAuth';
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa"; 

const Header = () => {
    const { user, logOuth } = UseAuth();
    const navigate = useNavigate();
    
    // Scroll Detection state
    const [scrolled, setScrolled] = useState(false);
    // Theme State
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        
        const localTheme = localStorage.getItem('theme') || 'light';
        setTheme(localTheme);
        document.querySelector("html").setAttribute("data-theme", localTheme);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleLogout = () => {
        logOuth()
            .then(() => {
                navigate("/login")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleToggle = (e) => {
        const newTheme = e.target.checked ? "dark" : "light";
        setTheme(newTheme);
        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Styles for Desktop Links
    const getDesktopLinkStyle = ({ isActive }) => {
        return isActive
            ? "font-bold text-white border-b-2 border-white pb-1 transition-all duration-300"
            : "font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-300";
    };

    // Styles for Mobile Links
    const getMobileLinkStyle = ({ isActive }) => {
        return isActive
            ? "font-bold text-primary block border-l-4 border-primary pl-2" 
            : "font-medium text-gray-700 block pl-2"; 
    };

    const desktopLinks = <>
        <li><NavLink to={"/home"} className={getDesktopLinkStyle}>Home</NavLink></li>
        <li><NavLink to={'/allScholarship'} className={getDesktopLinkStyle}>All Scholarship</NavLink></li>
        <li><NavLink to={'/about-us'} className={getDesktopLinkStyle}>About Us</NavLink></li>
        {
            user &&
            <>
            <li><NavLink to={'/help'} className={getDesktopLinkStyle}>Help Support</NavLink></li>
            <li><NavLink to={'/PrivacyTerms'} className={getDesktopLinkStyle}>Privacy Terms</NavLink></li>
            <li><NavLink to={'/dashboard/myProfile'} className={getDesktopLinkStyle}>My Profile</NavLink></li>
            </>
        }
    </>

    const mobileLinks = <>
        <li><NavLink to={"/home"} className={getMobileLinkStyle}>Home</NavLink></li>
        <li><NavLink to={'/allScholarship'} className={getMobileLinkStyle}>All Scholarship</NavLink></li>
        <li><NavLink to={'/about-us'} className={getMobileLinkStyle}>About Us</NavLink></li>
        {
            user &&
            <>
            <li><NavLink to={'/help'} className={getMobileLinkStyle}>Help Support</NavLink></li>
            <li><NavLink to={'/PrivacyTerms'} className={getMobileLinkStyle}>Privacy Terms</NavLink></li>
            <li><NavLink to={'/dashboard/myProfile'} className={getMobileLinkStyle}>My Profile</NavLink></li>
            </>
        }
        {/* Mobile Theme Toggle inside Menu */}
        <li className="mt-2 border-t pt-2">
            <div className="flex justify-between items-center px-2">
                <span className="font-semibold text-gray-600">Night Mode</span>
                <label className="swap swap-rotate text-primary">
                    <input onChange={handleToggle} type="checkbox" checked={theme === 'dark'} />
                    {/* Sun icon */}
                    <FaSun className="swap-on w-6 h-6" />
                    {/* Moon icon */}
                    <FaMoon className="swap-off w-6 h-6" />
                </label>
            </div>
        </li>
    </>

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`navbar sticky top-0 z-50 transition-all duration-300 ${
                scrolled 
                ? "bg-secondary/90 backdrop-blur-md shadow-lg py-2" 
                : "bg-secondary shadow-sm py-3"
            } text-white`}
        >
            <div className="navbar-start">
                
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-60 p-4 shadow-xl text-black"
                    >
                        {mobileLinks}
                    </ul>
                </div>

                {/* Logo */}
                <a className="text-xl"><Logo></Logo></a>
            </div>

            {/* Desktop Center Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {desktopLinks}
                </ul>
            </div>

            {/* Navbar End (Theme Toggle Desktop + Auth Buttons) */}
            <div className="navbar-end gap-2">
                
                {/* Desktop Theme Toggle (Hidden on Mobile) */}
                <div className='hidden lg:flex items-center gap-2 mr-2'>
                    <label className="swap swap-rotate hover:scale-110 transition-transform">
                        <input onChange={handleToggle} type="checkbox" checked={theme === 'dark'} />
                        <FaSun className="swap-on w-6 h-6 text-yellow-300" />
                        <FaMoon className="swap-off w-6 h-6 text-white" />
                    </label>
                </div>

                {/* User Profile Dropdown */}
                <div className='mr-0 md:mr-2'>
                    {
                        user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring ring-white ring-offset-base-100 ring-offset-2 w-8 h-8 md:w-10 md:h-10">
                                <div className="w-10 rounded-full">
                                    <img alt="User" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-[50] w-52 p-2 text-black shadow-lg mt-3">
                                <li className='px-4 py-2 font-bold text-primary border-b mb-2 truncate'>{user?.displayName}</li>
                                <li><Link to={"/dashboard/myProfile"} className='hover:bg-primary hover:text-white'>Dashboard</Link></li>
                                <li><button onClick={handleLogout} className="text-red-500 hover:bg-red-50">LogOut</button></li>
                            </ul>
                        </div>
                        ) : (
                        // Auth Buttons (LogIn + Demo Login)
                        <div className="flex items-center gap-1 md:gap-3">
                            
                            {/* LogIn Button */}
                            <Link to={'/login'}>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-sm md:btn-md btn-ghost text-white border border-white/30 hover:bg-white/10 px-2 md:px-4"
                                > 
                                    LogIn 
                                </motion.button>
                            </Link>

                            {/* Demo Login Button (Visible on Mobile & Desktop) */}
                            <Link to={"/login"}> 
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    // btn-sm ব্যবহার করা হয়েছে মোবাইলের জন্য
                                    className="btn btn-sm md:btn-md bg-white text-secondary border-none hover:bg-gray-200 px-2 md:px-4 font-bold"
                                > 
                                    Demo<span className="hidden md:inline"> LogIn</span>
                                </motion.button> 
                            </Link>
                        </div>
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Header;