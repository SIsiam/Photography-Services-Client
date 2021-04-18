import React from 'react';
import { Card } from 'react-bootstrap';
import  "./Review.css";

const Review = ({ review }) => {
    console.log(review);
    const { name, designation, img, comment } = review
    return (
        <Card style={{ width: '18rem', align: 'center', marginBottom: '5%', fontWeight:'640' }} className="text-center  bg-light rounded-75">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <div>
                        <Card.Img variant="top" className="image-fluid " style={{ width: '50%', borderRadius: '50px' }} src={img} />
                    </div>
                    <div className="text-left">
                        <Card.Title>{name} <br /> <small>{designation}</small></Card.Title>
                    </div>
                </div>


                <Card.Text>
                    {comment}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Review;