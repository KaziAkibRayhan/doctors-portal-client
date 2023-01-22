import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, slot, appointmentDate, price } = booking;
    const navigation = useNavigation()

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}.</p>
            <div className='w-2/4 card my-12 shadow-xl p-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;