import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const SimpleForm = ({handlePayment}) => {
    console.log(handlePayment);
    const stripe = useStripe();
    const elements = useElements();
    const [paymentErorr, setPaymentErorr] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentErorr(error.message)
            setPaymentSuccess(null)
            console.log('[error]', error);
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentErorr(null)
            handlePayment(paymentMethod.id)
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement className="text-light" />
                <br/>
                <button type="submit" className="btn btn-warning btn-lg btn-block text-light" disabled={!stripe}>Pay</button>
            </form>
            {
                paymentErorr && <p className="text-danger p-2"> {paymentErorr} </p>
            }

            {
                paymentSuccess && <p className="text-light p-2"> Your Paymnet SuccessFull </p>
            }

        </div>
    );
};

export default SimpleForm;