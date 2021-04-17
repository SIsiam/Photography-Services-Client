import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Review from '../Review/Review';


const Feedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div className="bg-success text-center container m-5 p-5" >
            <h2 style={{ textColor: '#111430' }}>Clients <span className="text-success">Feedback</span></h2>

            <div className="d-flex flex-wrap justify-content-between mt-5">

                {
                    reviews.map(review => <Review review={review} />)
                }

            </div>

        </div>
    );
};

export default Feedback;