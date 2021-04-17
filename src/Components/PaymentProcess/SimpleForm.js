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
            // handlePayment(paymentMethod.id)
            handlePayment(paymentMethod.id)
            console.log('[PaymentMethod]', paymentMethod);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={!stripe}>Pay</button>
            </form>
            {
                paymentErorr && <p className="text-danger"> {paymentErorr} </p>
            }

            {
                paymentSuccess && <p className="text-success"> Your Paymnet SuccessFull </p>
            }

        </div>
    );
};

export default SimpleForm;

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // const [paymentErorr, setPaymentErorr] = useState(null)
// // const [paymentSuccess, setPaymentSuccess] = useState(null)


// const SimpleForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         // Block native form submission.
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not loaded yet. Make sure to disable
//             // form submission until Stripe.js has loaded.
//             return;
//         }

//         // Get a reference to a mounted CardElement. Elements knows how
//         // to find your CardElement because there can only ever be one of
//         // each type of element.
//         const cardElement = elements.getElement(CardElement);

//         // Use your card Element with other Stripe.js APIs
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             console.log('[error]', error);
//             // setPaymentErorr(error.message)

//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//         }
//     };

//     return (
//         <div className="">

//             <form onSubmit={handleSubmit}>
//                 <CardElement />
//                 <button type="submit" disabled={!stripe}>
//                     Pay
//                 </button>
//             </form>
//             {/* {
//                 paymentErorr && <p className="text-danger"> {paymentErorr} </p>
//             } */}

//             {/* {
//                  paymentSuccess && <h2 className="text-success"> Your Paymnet SuccessFull </h2>
//              } */}

//         </div>


//     );
// };

// export default SimpleForm;
