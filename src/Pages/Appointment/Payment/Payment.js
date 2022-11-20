import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_StripePK);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking;

    // use navigation for showing loading icon until the data is fully loaded
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold mb-2'>Payment for {treatment}</h1>
            <p className='text-lg'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;