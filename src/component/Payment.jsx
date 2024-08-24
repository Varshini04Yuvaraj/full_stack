import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Make sure to replace with your public Stripe key
const stripePromise = loadStripe('your-stripe-public-key');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        // Call your backend to create a PaymentIntent
        const { data: clientSecret } = await axios.post('/api/payment/create-payment-intent', {
            amount: 1000 // example amount in cents
        });

        // Confirm the payment with the client secret
        const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Customer Name'
                }
            }
        });

        if (error) {
            console.error(error);
        } else {
            console.log('Payment successful');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                Pay
            </button>
        </form>
    );
};

const Payment = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Payment;
