import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const goBack = () => window.history.back();


const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]
const AdminSevice = () => {
    const [all, setAll] = useState([]);
    const [admin, setAdmin] = useState({});
    const { id } = useParams();
    const [status, setStatus] = useState('status');


    // const [file, setFile] = useState(null);
    const { loggedInUser, newOrder, setNewOrder, setLoggedInUser } = useContext(UserContext);
    // const { register, handleSubmit, watch, errors } = useForm();
    // const history = useHistory();


    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {

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


    // const onSubmit = (data) => {
    //     const formData = new FormData();
    //     const image = JSON.stringify(data.image)
    //     formData.append('file', file);
    //     formData.append('image', image);
    //     formData.append('service', newOrder.name);
    //     formData.append('price', data.price);
    //     formData.append('email', loggedInUser.email);
    //     formData.append('name', loggedInUser.name);
    //     formData.append('description', data.description);
    //     fetch('http://localhost:5000/placeOrder', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(result => {

    //             if (result) {
    //                 alert('Data has been send')
    //                 history.replace('/ServiceList')
    //             }
    //         })
    //         .catch(err => console.log(err))

    // }

    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json())
            .then(data => setNewOrder(data))
    }, [])



    // const fileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                const normalStatus = data.map(statusData => ({ ...statusData, status: 'pending' }))
                setAll(normalStatus);
            })
    }, [])

    const updates = (status) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])


    const change = (e, id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Updated User Status')
                }
            })
    }
    const defaultOption = options[0];

    return (
        <div className="admin-service">
            {loggedInUser.setUser ?
                <div>
               

                    <table className="table" style={{ marginLeft: '23vw', width: '70vw', marginTop: '5%' }}>
                        <thead className="thead-dark">
                            <tr>

                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                all.map(client =>
                                    <tr className="bg-light" key={client._id}>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.service}</td>
                                        <td>{client.description}</td>
                                        <td >
                                            <Dropdown options={options} onChange={(e) => { change(e, `${client._id}`) }} value={defaultOption} placeholder="Select an option" />
                                        </td>
                                    </tr>)
                            }

                        </tbody>

                    </table>
                </div>
                :
                <main className="container container-fluid text-center">
            <SideBar />
                    <h2 className="text-center"> Opps! Sorry This Page Not For You </h2>
                    <button onClick={goBack} className="btn btn-primary "  to="/home"><FontAwesomeIcon className="mr-2" icon={faArrowLeft}/> Go Back </button>
                    {/* 
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <input name="name" defaultValue={loggedInUser.name} ref={register} className="form-control p-4" />
                        <br />
                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className="form-control p-4" /> <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input name="service" defaultValue={newOrder.name} ref={register} className="form-control p-4" />
                        <br />
                        <input name="description" placeholder="Description" ref={register({ required: true })} className="form-control p-4" /> <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="d-flex">
                            <input name="price" placeholder="Price" ref={register({ required: true })} className="form-control p-4" />
                            <input name="image" type="file" onChange={fileChange} ref={register({ required: true })} className=" p-4" />
                        </div>

                        <input type="submit" value="Send" style={{ backgroundColor: "#111430", color: "white", padding: "1% 5%", borderRadius: "5px" }} />
                    </form> */}
                </main>}

        </div>
    );
};

export default AdminSevice;