import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';
import './SideNav.css'

// http://localhost:5000/2

const SideBar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = true;
                    setLoggedInUser(newUser)
                }
                else {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = false;
                    setLoggedInUser(newUser)
                }
            })
    }, [])




    return (
        <div className="sidebar py-5 px-4 " x>

            <ul className="list-unstyled">

                {
                    loggedInUser.setUser ?
                        <div>
                            <li>
                                <Link to="/adminSevice" className="text-secondary">
                                    <FontAwesomeIcon icon={faHdd} /> <span>Admin Sevice</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="text-secondary">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addAdmin" className="text-secondary" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manageService" className="text-secondary" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Manage Services</span>
                                </Link>
                            </li>
                        </div>


                        :


                        <div>

                         
                            <li>
                                <Link to="/serviceList" className="text-secondary">
                                    {/* <FontAwesomeIcon icon={faHdd} /> <span></span> */}
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>User Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className="text-secondary">
                                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/home" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </li>
                        </div>
                }

            </ul>
            <div>
            </div>
        </div>
    );
};
export default SideBar;