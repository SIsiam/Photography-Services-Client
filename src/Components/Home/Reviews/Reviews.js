import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import LinearProgress from '@material-ui/core/LinearProgress';


const Feedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://damp-fortress-30622.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div style={{ backgroundImage: "linear-gradient(123deg, #461B93 0%, #461B93 40%, #6A3CBC calc(40% + 1px), #6A3CBC 60%, #8253D7 calc(60% + 1px), #8253D7 70%, #F78F1E calc(70% + 1px), #F78F1E 100%)", borderRadius: '20px', }} className="mb-5 mt-5 text-center container p-4" >
            <h2 className="text-light">What <strong style={{ color: '#00FFFF' }}> Clients Saying</strong></h2>
                {
                    reviews.length === 0 && 
                    <div className="mt-5 mb-5 ">
                        <h1><LinearProgress /> </h1>
                    </div>

                }
            <div className="d-flex flex-wrap justify-content-between mt-5 effect">
                {
                    reviews.map(review => <Review review={review} />)
                }

            </div>

        </div>
    );
};

export default Feedback;