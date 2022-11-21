import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [cardErrorMsg, setCardErrorMsg] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const { price, patient, email, _id } = booking;

    // 3rd step start
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-portal-server-flame.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);
    // 3rd step end

    // 1st step start
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        // 1st step end

        // 2nd step start
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardErrorMsg(error.message);
        }
        else {
            setCardErrorMsg('');
        }
        // 2nd step end

        setSuccess('');
        setProcessing(true);
        // 4th step start
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );
        // 4th step end

        // 5th step start
        if (confirmError) {
            setCardErrorMsg(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            // 6th step start
            const payment = {
                name: patient,
                email,
                price,
                transactionId: paymentIntent.id,
                bookingId: _id,
            }

            fetch('https://doctors-portal-server-flame.vercel.app/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setSuccess("Congratz! Your payment is succeeded");
                        setTransactionId(paymentIntent.id);
                    }
                })
            // 6th step end
        }
        setProcessing(false);
        // 5th step end
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            <p className='text-red-600 my-3'>{cardErrorMsg}</p>
            {
                success && <>
                    <p className='text-green-600 mt-3'>{success}</p>
                    <p className='my-2'>Your Transaction ID: {transactionId}</p>
                </>
            }
        </form>
    );
};

export default CheckoutForm;