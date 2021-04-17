import React from 'react';
import Sponsor from '../Sponsor/Sponsor';


const sponsors = [
    { img: "https://i.imgur.com/SWKHK1V.png" },
    { img: "https://i.imgur.com/r1nFGRu.png" },
    { img: "https://i.imgur.com/0H3CNzW.png" },
    { img: "https://i.imgur.com/DuLBBqk.png" },
    { img: "https://i.imgur.com/yz5WH8X.png" }
];

const SponsorShip = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-success text-center"> Top Sponsor Ship </h2>
            {
                sponsors.map(sponsor => <Sponsor sponsor={sponsor} />)
            }

        </div>

    );
};

export default SponsorShip;