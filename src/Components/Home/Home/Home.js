import React from 'react';
import Header from '../Header/Header';
import LatestWork from '../LatestWork/LatestWork';
import Services from '../Services/Services';
import SponsorShip from '../SponsorShip/SponsorShip';
import Reviews from '../Reviews/Reviews';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import NavBar from '../../Navbar/NavBar';


const Home = () => {

    return (
        <div>
            <NavBar />
             <Header />
            <Services />
            <LatestWork />
            <Reviews />
            <SponsorShip />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;