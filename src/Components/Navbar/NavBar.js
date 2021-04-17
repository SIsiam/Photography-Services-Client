import React, { useEffect, useState } from 'react';
// import logo from '../../images/logos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {

    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        // my nav 

        // <nav style={{ backgroundColor: '#FBD062' }} className="navbar navbar-expand-lg navbar-light offset-md-1">
        //     <img style={{ width: '15%' }} className="navbar-brand img-fluid" src={logo} alt="Logo" />

        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>



        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        // <ul className="navbar-nav ml-auto">

        //     <li className="nav-item active">
        //         <Link to="/home" className="nav-link mr-5 font-weight-bold" href="#">Home <span className="sr-only">(current)</span></Link>
        //     </li>

        //     <li className="nav-item">
        //         <a className="nav-link mr-5 font-weight-bold" href="#">Our Portfolio</a>
        //     </li>


        //     <li className="nav-item">
        //         <Link to="/AdminSevice" className="nav-link mr-5 font-weight-bold">Admin</Link>
        //     </li>

        //     <li className="nav-item">
        //         <Link to="/login"> <button type="button" className=" mr-5 font-weight-bold btn btn-dark btn-lg">Login</button></Link>
        //     </li>
        // </ul>
        //     </div>
        // </nav>


















            <div className="container">
        <nav className={(isSticky || isCollapsed) ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top" : "slide out show navbar navbar-expand-sm navbar-light   "}>
            {/* navbar-light py-4 fixed-top */}

            <div className="container mb-5">
                {/* <img style={{ width: '5%',}} className="navbar-brand img-fluid" src={logo} alt="Logo" /> */}

                <button onClick={
                    () => setCollapsed(!isCollapsed ? 'show' : null)} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <Link to="/home" className="nav-link mr-5 font-weight-bold" href="#">Home </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mr-5 font-weight-bold" href="#">Our Portfolio</a>
                        </li>

                        <li className="nav-item">
                            <Link to="/serviceList" className="nav-link mr-5 font-weight-bold">Order List</Link>
                        </li>


                        <li className="nav-item">
                            <Link to="/AdminSevice" className="nav-link mr-5 font-weight-bold">Admin</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login"> <button type="button" className=" mr-5 font-weight-bold btn btn-dark btn-lg">Login</button></Link>
                        </li>
                    </ul>


                    {/* 
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doctor">Doctor Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul> */}

                </div>
            </div>
        </nav>
        </div>

    );
};

export default NavBar;