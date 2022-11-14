import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [signUpErrorMsg, setSignUpErrorMsg] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = (data, event) => {
        setSignUpErrorMsg('');
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('User created successfully');
                event.target.reset();
            })
            .catch(error => setSignUpErrorMsg(error.message));
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 shadow-lg p-10 md:mx-0 mx-3'>
                <h1 className='text-2xl text-center font-semibold mb-5'>Sign Up</h1>
                {signUpErrorMsg && <p className='text-base text-center text-red-600 my-3'>{signUpErrorMsg}</p>}
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
                                minLength: { value: 6, message: "Password must be 6 characters" },
                                pattern: { value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$@!%&*?])/, message: "Password must be with uppercase,lowercase,number and special character" }
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