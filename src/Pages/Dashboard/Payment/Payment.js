import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
    const { treatment, slot, appointmentDate, price } = booking;
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}.</p>
        </div>
    );
};

export default Payment;