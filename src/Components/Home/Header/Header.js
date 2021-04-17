import React from 'react';
import frame from '../../../images/logos/Frame.png';
import photoHead from '../../../images/canon-rebel-t4i-780103_1920.jpg';
import './Header.css';



const Header = () => {

    return (
        <main className="bg row " style={{ height: '600px', width: '100%' }}>

                <div className="col-md-5  col-sm-6 offset-md-1 ">
                    <h1 style={{ color: '#111430', fontWeight: 'bold' }}>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                </div>

                <div id="all" className="col-md-6 col-sm-6">
                    <div class="view view-second">
                        <img src={photoHead} width="350px" alt="" />
                        <div class="mask"></div>
                        <div class="content">
                            <h2>Midtown</h2>
                            <p>A description of some sort between these tags. I am so cool and awesomely awesome.</p>
                        </div>
                    </div>
                </div>


        </main>
    );
};

export default Header;