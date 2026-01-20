// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router';
// import GmailLogin from '../GmailLogin';
// import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
// import UseAuth from '../../Hooks/UseAuth';
// import axios from 'axios';
// import auth from "../../../assets/auth.png";
// import { toast, ToastContainer } from 'react-toastify';

// const Register = () => {
//     const { register: signUp, updateUserProfile } = UseAuth();
//     const axiooSecure = UseAxiosSequre();
//     const locations = useLocation();
//     const navigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const handleRegisterData = data => {
//         console.log(data);
//         const photoURL = data.photo[0];
//         //----------------------------------------1--------------------------   
//         signUp(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 toast(`register sucessfull ${user}`)
//                 console.log(`register sucessfull ${user}`)

//                 //imageBB ----------------------------------2-------------------------  

//                 const formData = new FormData();  //store
//                 formData.append('image', photoURL)

//                 const send_Store_image = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`; //send to the store.
//                 //image send to the imageBB help with axios post --------3----------------
//                 axios.post(send_Store_image, formData)
//                     .then(res => {
//                         console.log("after send the img to imgBB", res.data.data.display_url)
//                         const imageURL = res.data.data.display_url

//                         //mongodb post data:
//                         const sendData = {
//                             email: data.email,
//                             displayName: data.name,
//                             photoURL: imageURL
//                         }
//                         axiooSecure.post('/users', sendData)
//                             .then(res => {
//                                 if (res.data.insertedId) {
//                                     console.log("after user register data save MDB", res.data)
//                                 }
//                             })

//                         // update firebase profile------------4---------------
//                         const updateProfile = {
//                             displayName: data.name,
//                             photoURL: imageURL
//                         }
//                         updateUserProfile(updateProfile)
//                             .then(() => {
//                                 console.log('update profile sucessfull')
//                                 setTimeout(() => {
//                                     navigate(locations.state ? locations.state : '/home')
//                                 }, 800)
//                             })
//                             .catch(error => {
//                                 alert('update profile faild', error)
//                             })
//                     })
//             })
//             .catch(error => {
//                 alert('register faild', error)
//             })

//     }

//     return (
//         <section className='flex flex-col-reverse md:flex-row lg:flex-row'>
//             <div className="card bg-base-100  text-center w-full max-w-sm shrink-0 shadow-2xl ">
//                 <h1 className="text-5xl font-bold">Register now!</h1>
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit(handleRegisterData)}>
//                         <fieldset className="fieldset">
//                             {/* name */}
//                             <label className="label">Name</label>
//                             <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="name" />
//                             {
//                                 errors.name?.type === "required" && <p className='text-red-500'>name is required</p>
//                             }
//                             {/* photo url */}
//                             <label className="label">Photo</label>

//                             <input type="file" {...register('photo', { required: true })} className="file-input w-full" placeholder="Photo URL" />
//                             {
//                                 errors.photo?.type === "required" && <p className='text-red-500'>PhotoURL is required</p>
//                             }
//                             {/* email */}
//                             <label className="label">Email</label>
//                             <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
//                             {
//                                 errors.email?.type === "required" && <p className='text-red-500'>email must be required</p>
//                             }


//                             {/* password */}
//                             <label className="label">Password</label>
//                             <input type="password" {...register('password', {
//                                 required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
//                             })} className="input w-full" placeholder="Password" />
//                             {
//                                 errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
//                             }
//                             {
//                                 errors.password?.type === 'minLength' && <p className='text-red-500'>Minimum password length is 6 or more</p>
//                             }
//                             {
//                                 errors.password?.type === "pattern" && <p className='text-red-500'>Minimum One Capital letter & One Speacial Cherechters Required</p>
//                             }


//                             <button className="btn btn-primary text-white mt-4">Register</button>
//                         </fieldset>
//                     </form>
//                     <GmailLogin></GmailLogin>
//                     <p>Already have account in zap shift? <Link state={location.state} to={'/login'} className='text-blue-500'>Login</Link></p>
//                 </div>

//                 <ToastContainer />
//             </div>
//             <div>
//                 <img className='w-auto h-full' src={auth} alt="" />
//             </div>
//         </section>
//     );
// };

// export default Register;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router'; // Check if 'react-router-dom' is intended
import GmailLogin from '../GmailLogin';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import auth from "../../../assets/auth.png";
import { toast, ToastContainer } from 'react-toastify';
import { FaUser, FaEnvelope, FaLock, FaCamera, FaSpinner } from 'react-icons/fa';

const Register = () => {
    const { register: signUp, updateUserProfile } = UseAuth();
    const axiooSecure = UseAxiosSequre();
    const location = useLocation(); // Fixed variable name 'locations' to 'location'
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // Loading state added for better UX
    const [loading, setLoading] = useState(false);

    const handleRegisterData = async (data) => {
        setLoading(true); // Start loading
        console.log(data);
        const photoURL = data.photo[0];

        try {
            // 1. Create User in Firebase
            const result = await signUp(data.email, data.password);
            const user = result.user;
            console.log(`register successful ${user}`);

            // 2. Upload Image to ImageBB
            const formData = new FormData();
            formData.append('image', photoURL);
            
            const send_Store_image = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`;
            const imgRes = await axios.post(send_Store_image, formData);
            
            if (imgRes.data.success) {
                const imageURL = imgRes.data.data.display_url;
                console.log("ImageBB URL:", imageURL);

                // 3. Save User to MongoDB
                const sendData = {
                    email: data.email,
                    displayName: data.name,
                    photoURL: imageURL
                };

                const dbRes = await axiooSecure.post('/users', sendData);
                if (dbRes.data.insertedId) {
                    console.log("User saved to DB:", dbRes.data);
                }

                // 4. Update Firebase Profile
                await updateUserProfile({
                    displayName: data.name,
                    photoURL: imageURL
                });

                console.log('Profile Updated');
                toast.success("Registration Successful!");
                
                setTimeout(() => {
                    navigate(location.state ? location.state : '/home');
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            toast.error(`Registration Failed: ${error.message}`);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-200  font-sans">
            <div className="card lg:card-side bg-base-100 shadow-2xl max-w-5xl w-full overflow-hidden rounded-2xl">
                
                {/* Left Side: Image (Desktop Only) */}
                <figure className="lg:w-1/2 relative hidden lg:block bg-primary/5">
                    <img 
                        src={auth} 
                        alt="Join Us" 
                        className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-2 uppercase">Join Our Community</h2>
                            <p className="opacity-90">Start your journey with thousands of scholars today.</p>
                        </div>
                    </div>
                </figure>

                {/* Right Side: Form */}
                <div className="card-body lg:w-1/2 p-8 lg:p-12">
                    <div className="text-center lg:text-left mb-4">
                        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                        <p className="text-gray-500 mt-1">Get started for free!</p>
                    </div>

                    <form onSubmit={handleSubmit(handleRegisterData)} className="space-y-4">
                        
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold flex items-center gap-2"><FaUser className="text-gray-400"/> Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                {...register('name', { required: true })} 
                                placeholder="John Doe" 
                                className={`input input-bordered w-full focus:input-primary ${errors.name ? 'input-error' : ''}`} 
                            />
                            {errors.name?.type === "required" && <span className='text-error text-xs mt-1'>Name is required</span>}
                        </div>

                        {/* Photo Upload */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold flex items-center gap-2"><FaCamera className="text-gray-400"/> Profile Photo</span>
                            </label>
                            <input 
                                type="file" 
                                {...register('photo', { required: true })} 
                                className={`file-input file-input-bordered file-input-primary w-full ${errors.photo ? 'file-input-error' : ''}`} 
                            />
                            {errors.photo?.type === "required" && <span className='text-error text-xs mt-1'>Photo is required</span>}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold flex items-center gap-2"><FaEnvelope className="text-gray-400"/> Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                {...register('email', { required: true })} 
                                placeholder="name@example.com" 
                                className={`input input-bordered w-full focus:input-primary ${errors.email ? 'input-error' : ''}`} 
                            />
                            {errors.email?.type === "required" && <span className='text-error text-xs mt-1'>Email is required</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold flex items-center gap-2"><FaLock className="text-gray-400"/> Password</span>
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
                            {errors.password?.type === 'required' && <span className='text-error text-xs mt-1'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-error text-xs mt-1'>Must be 6+ characters</span>}
                            {errors.password?.type === "pattern" && <span className='text-error text-xs mt-1'>Need Uppercase, Lowercase, Number & Special Char</span>}
                        </div>

                        {/* Submit Button with Loading State */}
                        <button 
                            disabled={loading} 
                            className="btn btn-primary w-full text-white shadow-lg mt-4"
                        >
                            {loading ? <><FaSpinner className="animate-spin" /> Processing...</> : "Register"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-sm text-gray-400">OR REGISTER WITH</div>

                    <div className="w-full">
                         <GmailLogin></GmailLogin>
                    </div>

                    <p className="text-center mt-4 text-sm text-gray-600">
                        Already have an account? <Link state={location.state} to={'/login'} className='font-bold text-primary hover:underline'>Login here</Link>
                    </p>
                </div>
            </div>
            
            <ToastContainer position='top-center' theme='colored' />
        </section>
    );
};

export default Register;