import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import loadingspinner from "../../../images/1.gif";
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    document.title = "Photography Services - Service";

    useEffect(() => {
        fetch('https://damp-fortress-30622.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])



    return (
        <div className=" text-center mb-5 mt-5 p-3 service-container" >
            <h2 className=" mb-5" > We <strong style={{ color:'#E40C2B' }}> Provide This Services__</strong> </h2>

            <div className="mt-5 container-fluid ">
                {
                    services.length === 0 && <div className="mt-5 mb-5">
                        <img src={loadingspinner} style={{width:'20%'}} alt=""/ >
                    </div>

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