import React from 'react';
import Sponsor from '../Sponsor/Sponsor';
import image1 from "../../../images/logo1.jpg";
import image2 from "../../../images/canon1.png";
import image3 from "../../../images/sony.jpg";
import image4 from "../../../images/panasoinic.jpg";
import image5 from "../../../images/canon.jpg";
import image6 from "../../../images/google.jpg";
import image7 from "../../../images/netflix.jpg";
import image8 from "../../../images/Apple.jpg";
import image9 from "../../../images/microsoft.png";


const sponsors = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    { img: image5 },
    { img: image6 },
    { img: image7 },
    { img: image8 },
    { img: image9 },
];

const SponsorShip = () => {
    return (
        <div className="mt-5 mb-5 container">
            <h2 className="text-center"> <strong style={{color:'#E40C2B'}}>Top Sponsor Ship </strong>  </h2>
            {
                sponsors.map(sponsor => <Sponsor sponsor={sponsor} />)
            }

        </div>

    );
};

export default SponsorShip;