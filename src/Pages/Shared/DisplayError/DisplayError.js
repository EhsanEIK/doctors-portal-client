import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    // log out
    const handleLogOut = () => {
        logOut()
            .then(() => navigate('/login'))
            .catch(error => console.error(error));
    }

    return (
        <div className='text-center'>
            <p className='text-3xl text-red-600'>Something went wrong!</p>
            <p className='text-3xl text-red-600'>{error.statusText || error.message}</p>
            <p className='text-3xl text-red-600'>
                Please<button onClick={handleLogOut} className="ml-2 underline">Login</button>
            </p>
        </div>
    );
};

export default DisplayError;