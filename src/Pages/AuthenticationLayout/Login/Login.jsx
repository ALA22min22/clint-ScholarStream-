import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import GmailLogin from '../GmailLogin';
import UseAuth from '../../Hooks/UseAuth';
import { toast, ToastContainer } from 'react-toastify';
import auth from "../../../assets/auth.png";
// import { Link } from 'react-router';

const Login = () => {
    const { login } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginFrom = data => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                console.log("login sucessfull", result.user);
                navigate(location.state ? location.state : "/home")
            })
            .catch(error => {
                toast(`login faild : ${error}`)
            })
    }

    return (
        <section className='flex flex-col-reverse md:flex-row lg:flex-row'>
            <div className="card bg-base-100 text-center w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleLoginFrom)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
                            {
                                errors.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>
                            }

                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ })} className="input w-full" placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'>Minimum password length is 6 or more</p>
                            }
                            {
                                errors.password?.type === "pattern" && <p className='text-red-500'>Minimum One Capital letter & One Speacial Cherechters Required</p>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-primary text-white mt-4">Login</button>
                        </fieldset>
                    </form>
                    <GmailLogin></GmailLogin>
                    <p>Are you new our zap shift? <Link state={location.state} to={'/register'} className='text-blue-500'>Register</Link></p>
                </div>
                <ToastContainer />
            </div>
            <div>
                <img className='w-auto h-full' src={auth} alt="" />
            </div>
        </section>
    );
};

export default Login;