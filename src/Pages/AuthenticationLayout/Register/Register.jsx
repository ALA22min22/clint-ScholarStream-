import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import GmailLogin from '../GmailLogin';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const { register: signUp, updateUserProfile } = UseAuth();
    const axiooSecure = UseAxiosSequre();
    const locations = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterData = data => {
        console.log(data);
        const photoURL = data.photo[0];
        //----------------------------------------1--------------------------   
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast(`register sucessfull ${user}`)
                console.log(`register sucessfull ${user}`)

                //imageBB ----------------------------------2-------------------------  

                const formData = new FormData();  //store
                formData.append('image', photoURL)

                const send_Store_image = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGE_API_KEY}`; //send to the store.
                //image send to the imageBB help with axios post --------3----------------
                axios.post(send_Store_image, formData)
                    .then(res => {
                        console.log("after send the img to imgBB", res.data.data.display_url)
                        const imageURL = res.data.data.display_url
    
                        //mongodb post data:
                        const sendData = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: imageURL
                        }
                        axiooSecure.post('/users', sendData)
                            .then(res => {
                                if(res.data.insertedId){
                                    console.log("after user register data save MDB", res.data)
                                }                              
                            })

                        // update firebase profile------------4---------------
                        const updateProfile = {
                            displayName: data.name,
                            photoURL: imageURL
                        }
                        updateUserProfile(updateProfile)
                            .then(() => {
                                console.log('update profile sucessfull')
                                navigate(locations.state ? locations.state : '/')
                            })
                            .catch(error => {
                                alert('update profile faild', error)
                            })
                    })
            })
            .catch(error => {
                alert('register faild', error)
            })

    }

    return (
        <div className="card bg-base-100  text-center w-full max-w-sm shrink-0 shadow-2xl ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit(handleRegisterData)}>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="name" />
                        {
                            errors.name?.type === "required" && <p className='text-red-500'>name is required</p>
                        }
                        {/* photo url */}
                        <label className="label">Photo</label>

                        <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Photo URL" />
                        {
                            errors.photo?.type === "required" && <p className='text-red-500'>PhotoURL is required</p>
                        }
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
                        {
                            errors.email?.type === "required" && <p className='text-red-500'>email must be required</p>
                        }


                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', {
                            required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                        })} className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Minimum password length is 6 or more</p>
                        }
                        {
                            errors.password?.type === "pattern" && <p className='text-red-500'>Minimum One Capital letter & One Speacial Cherechters Required</p>
                        }


                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <GmailLogin></GmailLogin>
                <p>Already have account in zap shift? <Link state={location.state} to={'/login'} className='text-red-500'>Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;