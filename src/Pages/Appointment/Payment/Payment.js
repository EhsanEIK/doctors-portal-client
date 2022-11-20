import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Payment</h1>
        </div>
    );
};

export default Payment;