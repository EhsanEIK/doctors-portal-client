import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 shadow-lg p-10 md:mx-0 mx-3'>
                <h1 className='text-2xl text-center font-semibold  mb-8'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" className="input input-bordered w-full" />
                        <label className="label"><span className="label-text">Forgot Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full mt-5' value="Login" type="submit" />
                </form>
                <p className='text-center text-sm mt-2'>New to Doctors Portal?<Link to='/signup' className='text-secondary ml-1'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full mt-1'>Continue with Google</button>
            </div>
        </div >
    );
};

export default LogIn;