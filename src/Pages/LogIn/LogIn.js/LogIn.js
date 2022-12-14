import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken';

const LogIn = () => {
    const { logIn, socialMediaLogin, resetPassword } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [logInErrorMsg, setLogInErrorMsg] = useState('');
    const [userEmail, setUserEmail] = useState();
    const [token] = useToken(userEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    // login handler
    const handleLogin = data => {
        setLogInErrorMsg('');

        const email = data.email;
        const password = data.password;

        logIn(email, password)
            .then(result => {
                toast.success('User log in successfully');
                if (token) {
                    navigate(from, { replace: true });
                }
            })
            .catch(error => setLogInErrorMsg(error.message));
    }

    // google login
    const handleGoogleLogin = () => {
        socialMediaLogin(googleProvider)
            .then(() => {
                toast.success('User log in successfully');
                navigate(from, { replace: true });
            })
            .catch(error => setLogInErrorMsg(error.message));
    }

    // send password reset email
    const handleResetPassword = () => {
        setLogInErrorMsg('');

        if (userEmail) {
            resetPassword(userEmail)
                .then(() => toast.success('Please check your email to reset password'))
                .catch(error => setLogInErrorMsg(error.message));
        }
        else {
            alert('Please type your email to reset password');
        }
    }

    // get and set the user email
    const handleOnBlurEmail = event => {
        setUserEmail(event.target.value);
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 shadow-lg p-10 md:mx-0 mx-3'>
                <h1 className='text-2xl text-center font-semibold  mb-8'>Login</h1>
                {logInErrorMsg && <p className='text-base text-center text-red-600 my-3'>{logInErrorMsg}</p>}
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                onBlur: handleOnBlurEmail
                            })}
                            type="email" className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters" }
                            })}
                            type="password" className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                            <span onClick={handleResetPassword} className="link label-text hover:text-sky-600">Reset Password</span>
                        </label>
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-5' value="Login" type="submit" />
                </form>
                <p className='text-center text-sm mt-2'>New to Doctors Portal?<Link to='/signup' className='text-secondary ml-1'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full mt-1'>Continue with Google</button>
            </div>
        </div>
    );
};

export default LogIn;