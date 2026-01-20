import React from 'react';
import Logo from './component/Logo';
import { motion } from "framer-motion";
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className=" rounded-none text-base-content border-base-300 border-t px-10 py-4   before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700  bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl">
                <aside className="grid-flow-col items-center">
                    <Logo></Logo>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.linkedin.com/in/md-alamin-dev/?trk=opento_sprofile_topcard' target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/ajalaminhossen01?igsh=MW42bXFsazRzZHQwbA==' target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/ajalaminhossen01'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
            {/* 2 */}
            <footer className="footer rounded-none sm:footer-horizontal bg-neutral text-neutral-content p-10 before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700  bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl  text-primary">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={"/about-us"} className="link link-hover">About us</Link>
                    <HashLink smooth to={"home/#our-contact"} className="link link-hover">Contact</HashLink>
                    <HashLink smooth to={"home/#top-scho"} className="link link-hover">Top Scholership</HashLink>
                    <HashLink smooth to={"allScholarship/#all-scho"} className="link link-hover">All Scholership</HashLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to={"/PrivacyTerms"} className="link link-hover">PrivacyTerms</Link>
                    <Link to={"/help"} className="link link-hover">Help / Support</Link>
                    
                </nav>
            </footer>
            {/*3 */}
            <footer className="footer rounded-none sm:footer-horizontal footer-center bg-base-300 text-base-content p-4  before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700  bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl">
                <aside>
                    <motion.p initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, color: "#f97316" }}>Copyright © {new Date().getFullYear()} - All right reserved by Scholar Stream Ltd</motion.p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;


