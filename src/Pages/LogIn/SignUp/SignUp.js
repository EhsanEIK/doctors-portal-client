import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = data => {
        console.log(data);
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 shadow-lg p-10 md:mx-0 mx-3'>
                <h1 className='text-2xl text-center font-semibold mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: "Name is required"
                            })}
                            type="text" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required"
                            })}
                            type="email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password should be 6 characters" }
                            })}
                            type="password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-5' value="Sign up" type="submit" />
                </form>
                <p className='text-center text-sm mt-2'>Already have an account?<Link to='/login' className='text-secondary ml-1'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full mt-1'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;