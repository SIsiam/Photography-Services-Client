import React, { useEffect, useState } from 'react';
import logo from '../../images/logo1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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

        <div className="container">
            <nav className={(isSticky || isCollapsed) ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-1  fixed-top" : "slide out show navbar navbar-expand-sm navbar-light "}>
                <Link className="" to="/home">
                    <img src={logo} style={{ width: '120px' }} alt="" />
                </Link>
                <div className="container">
                    <button onClick={
                        () => setCollapsed(!isCollapsed ? 'show' : null)} className="navbar-toggler d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <Link to="/home" className="nav-link mr-5 font-weight-bold">Home </Link>
                            </li>


                            <li className="nav-item">
                                <Link to="/orderList" className="nav-link mr-5 font-weight-bold">Order List</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link mr-5 font-weight-bold" href="#contactUs">Contact Us</a>
                            </li>

                            <li className="nav-item">
                                <Link to="/AdminSevice"> <button type="button" className=" mr-5 font-weight-bold btn btn-danger btn-lg">Admin</button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/login"> <button type="button" className=" mr-5 font-weight-bold btn btn-warning btn-lg">Login</button></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;