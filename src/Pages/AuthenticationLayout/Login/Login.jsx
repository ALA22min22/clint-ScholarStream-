// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router';
// import GmailLogin from '../GmailLogin';
// import UseAuth from '../../Hooks/UseAuth';
// import { toast, ToastContainer } from 'react-toastify';
// import auth from "../../../assets/auth.png";
// import { RiLoginCircleFill } from 'react-icons/ri';
// // import { Link } from 'react-router';

// const Login = () => {
//     const { login } = UseAuth();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { register, handleSubmit, setValue, formState: { errors } } = useForm();

//     const handleDemoUserLogin = () => {
//         setValue("email", "honey22bro@gmail.com", { shouldValidate: true });
//         setValue("password", "ALA22min@", { shouldValidate: true });
//         toast.info("Demo Credentials Applied!")
//     }
//     const handleDemoModaretorLogin = () => {
//         setValue("email", "modaretor22stream@gmail.com", { shouldValidate: true });
//         setValue("password", "ALA22min@", { shouldValidate: true });
//         toast.info("Demo Credentials Applied!")
//     }
//     const handleDemoAdminLogin = () => {
//         setValue("email", "admin22scholer@gmail.com", { shouldValidate: true });
//         setValue("password", "ALA22min@", { shouldValidate: true });
//         toast.info("Demo Credentials Applied!")
//     }

//     const handleLoginFrom = data => {
//         console.log(data)
//         login(data.email, data.password)
//             .then(result => {
//                 console.log("login sucessfull", result.user);
//                 navigate(location.state ? location.state : "/home")
//             })
//             .catch(error => {
//                 toast(`login faild : ${error}`)
//             })
//     }

//     return (
//         <section className='flex flex-col-reverse md:flex-row lg:flex-row'>
//             <div className="card bg-base-100 text-center w-full max-w-sm shrink-0 shadow-2xl ">
//                 <h1 className="text-5xl font-bold">Login now!</h1>
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit(handleLoginFrom)}>
//                         <fieldset className="fieldset">
//                             <label className="label">Email</label>
//                             <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
//                             {
//                                 errors.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>
//                             }

//                             {/* password */}
//                             <label className="label">Password</label>
//                             <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ })} className="input w-full" placeholder="Password" />
//                             {
//                                 errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
//                             }
//                             {
//                                 errors.password?.type === 'minLength' && <p className='text-red-500'>Minimum password length is 6 or more</p>
//                             }
//                             {
//                                 errors.password?.type === "pattern" && <p className='text-red-500'>Minimum One Capital letter & One Speacial Cherechters Required</p>
//                             }
//                             <div className='text-start'><a className="link link-hover">Forgot password?</a></div>
//                             <button className="btn btn-primary text-white my-4">Login</button>

//                             {/* demo */}
//                             <button
//                                 onClick={handleDemoUserLogin}
//                                 className="btn bg-white text-black border-[#e5e5e5] w-full">
//                                 <RiLoginCircleFill className='text-xl text-yellow-400' />
//                                 Demo User Login
//                             </button>
//                             <button
//                                 onClick={handleDemoModaretorLogin}
//                                 className="btn bg-white text-black border-[#e5e5e5] w-full">
//                                 <RiLoginCircleFill className='text-xl text-yellow-400' />
//                                 Demo Modaretor Login
//                             </button>
//                             <button
//                                 onClick={handleDemoAdminLogin}
//                                 className="btn bg-white text-black border-[#e5e5e5] w-full">
//                                 <RiLoginCircleFill className='text-xl text-yellow-400' />
//                                 Demo Admin Login
//                             </button>

//                         </fieldset>
//                     </form>
//                     <GmailLogin></GmailLogin>



//                     <p>Are you new our zap shift? <Link state={location.state} to={'/register'} className='text-blue-500'>Register</Link></p>
//                 </div>
//                 <ToastContainer position='top-center' theme='colored' />
//             </div>
//             <div>
//                 <img className='w-auto h-full' src={auth} alt="" />
//             </div>
//         </section>
//     );
// };

// export default Login;

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import GmailLogin from '../GmailLogin';
import UseAuth from '../../Hooks/UseAuth';
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../../assets/auth.png";
import { RiAdminFill, RiUser3Fill, RiShieldUserFill } from 'react-icons/ri'; // Added specific icons

const Login = () => {
    const { login } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const handleDemoUserLogin = () => {
        setValue("email", "honey22bro@gmail.com", { shouldValidate: true });
        setValue("password", "ALA22min@", { shouldValidate: true });
        toast.info("User Credentials Applied!");
    }
    const handleDemoModaretorLogin = () => {
        setValue("email", "modaretor22stream@gmail.com", { shouldValidate: true });
        setValue("password", "ALA22min@", { shouldValidate: true });
        toast.info("Moderator Credentials Applied!");
    }
    const handleDemoAdminLogin = () => {
        setValue("email", "admin22scholer@gmail.com", { shouldValidate: true });
        setValue("password", "ALA22min@", { shouldValidate: true });
        toast.info("Admin Credentials Applied!");
    }

    const handleLoginFrom = data => {
        login(data.email, data.password)
            .then(result => {
                navigate(location.state ? location.state : "/home")
            })
            .catch(error => {
                toast.error(`Login Failed: ${error.message}`)
            })
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-200 p-4 font-sans">
            <div className="card lg:card-side bg-base-100 shadow-2xl max-w-5xl w-full overflow-hidden rounded-2xl">
                
                {/* Left Side: Image & Branding */}
                <figure className="lg:w-1/2 relative hidden lg:block">
                    <img 
                        src={auth} 
                        alt="Authentication" 
                        className="h-full w-full object-cover" 
                    />
                    {/* Dark Overlay for better text readability if needed */}
                    <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]"></div>
                    <div className="absolute bottom-10 left-10 text-white z-10 drop-shadow-lg">
                        <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>
                        <p className="text-lg opacity-90">Access your dashboard and manage your scholarships.</p>
                    </div>
                </figure>

                {/* Right Side: Form */}
                <div className="card-body lg:w-1/2 p-8 lg:p-12">
                    <div className="text-center lg:text-left mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Login to Account</h2>
                        <p className="text-gray-500 mt-2">Please enter your credentials to continue.</p>
                    </div>

                    <form onSubmit={handleSubmit(handleLoginFrom)} className="space-y-4">
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                {...register('email', { required: true })} 
                                placeholder="name@example.com" 
                                className={`input input-bordered w-full focus:input-primary ${errors.email ? 'input-error' : ''}`} 
                            />
                            {errors.email?.type === 'required' && <span className="text-error text-xs mt-1">Email is required</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                {...register('password', { 
                                    required: true, 
                                    minLength: 6, 
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ 
                                })} 
                                placeholder="••••••••" 
                                className={`input input-bordered w-full focus:input-primary ${errors.password ? 'input-error' : ''}`} 
                            />
                            {errors.password?.type === 'required' && <span className="text-error text-xs mt-1">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-error text-xs mt-1">Min length is 6</span>}
                            {errors.password?.type === "pattern" && <span className="text-error text-xs mt-1">Weak password pattern</span>}
                            
                            <label className="label justify-end">
                                <a href="#" className="label-text-alt link link-primary link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button className="btn btn-primary w-full text-lg text-white shadow-lg hover:shadow-primary/40">
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-gray-400 text-sm">OR CONTINUE WITH</div>

                    {/* Social Login */}
                    <div className='w-full'>
                         <GmailLogin></GmailLogin>
                    </div>

                    {/* Quick Demo Access Section */}
                    <div className="mt-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase text-center mb-3 tracking-wider">Quick Demo Access</p>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                type="button" 
                                onClick={handleDemoUserLogin}
                                className="btn btn-xs sm:btn-sm btn-outline hover:btn-info flex flex-col sm:flex-row items-center gap-1 h-auto py-2">
                                <RiUser3Fill /> User
                            </button>
                            <button
                                type="button"
                                onClick={handleDemoModaretorLogin}
                                className="btn btn-xs sm:btn-sm btn-outline hover:btn-warning flex flex-col sm:flex-row items-center gap-1 h-auto py-2">
                                <RiShieldUserFill /> Mod
                            </button>
                            <button
                                type="button"
                                onClick={handleDemoAdminLogin}
                                className="btn btn-xs sm:btn-sm btn-outline hover:btn-error flex flex-col sm:flex-row items-center gap-1 h-auto py-2">
                                <RiAdminFill /> Admin
                            </button>
                        </div>
                    </div>

                    {/* Register Link */}
                    <p className="text-center mt-6 text-sm text-gray-600">
                        Don't have an account? <Link state={location.state} to={'/register'} className='font-bold text-primary hover:underline'>Create an account</Link>
                    </p>
                </div>
            </div>
            
            <ToastContainer position='top-center' theme='colored' />
        </section>
    );
};

export default Login;