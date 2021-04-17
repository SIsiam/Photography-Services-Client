import React from 'react';
import { Button } from 'react-bootstrap';
import './UserOrder.css'

const UserOrder = ({ order }) => {
    console.log(order);
    const { serviceImg, service, description, status, details } = order;
    return (
        <div className="">
            <div className="mb-5">
                <img src={`data:image/png;base64,${serviceImg}`}  height="auto" class="card-img-top w-25" alt="" />
                <div>
                    <h4 class="card-title p-2">{service}</h4>
                    <p class="card-text">{description}</p>
                    <p class="card-text p-2">{details}</p>
                </div>
                <Button variant="outline-success" className="mt-3">{status}</Button>
            </div>
        </div>
    );
};

export default UserOrder;