import React from 'react';
import './Sponsor.css'

const Sponsor = ({ sponsor }) => {
    console.log(sponsor);
    return (
        <div className="my-sponsor">
            <div>
                <img style={{ width: '15vw', height: '10vh', }} src={sponsor.img} className="m-5" alt="sponsors logo" />
            </div>
        </div>
    );
};

export default Sponsor;