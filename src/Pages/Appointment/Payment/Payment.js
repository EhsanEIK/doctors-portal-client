import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-2'>Payment for {treatment}</h1>
            <p className='text-lg'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;