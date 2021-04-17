import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])



    return (
        <div className=" text-center mb-5 mt-5 bg-dark" >
            <h2 className="bg-light mb-5"> We Are Provide Services </h2>

            <div className="mt-5 container-fluid ">
                {
                    services.length === 0 && <h1>Loading ...</h1>
                }
                <div className="row row-cols-1 row-cols-md-3 col-xs-6 p-3">
                    {
                        services.map(service => <Service service={service}  ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;