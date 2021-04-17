import React from 'react';
import { Card } from 'react-bootstrap';


const Review = ({ review }) => {
    console.log(review);
    const { name, designation, img, comment } = review
    return (
        <Card style={{ width: '18rem', align: 'center', marginBottom: '5%' }} className="text-center effect bg-light">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <div>

                        <Card.Img variant="top" className="image-fluid " style={{ width: '25%', borderRadius: '50px' }} src={img} />
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