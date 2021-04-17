import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';



const ManageService = () => {
    const history = useHistory()
    document.title = "Car House - Admin";
    const [allService, setAllService] = useState([]);
    const { loggedInUser } = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllService(data)
            })
    }, [])


    const deleteService = (_id) => {
        console.log(_id);
        const URL = `http://localhost:5000/allServices/${_id}`
        console.log(URL);
        fetch(URL, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        alert('Service deleted successfully')
        history.push('/')
    }


    return (
        <div className="admin-service">
            <div className="d-flex container-fluid p-3">
                <h4 style={{ marginLeft: "10vw" }}>Manage Your Services</h4>
                <h5 className="ml-auto">Welcome {loggedInUser.name}</h5>
            </div>
            <SideBar />
            <table className="table Admin-table " style={{ marginLeft: '23vw', width: '70vw', marginTop: '5%' }}>
                <thead className="thead thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allService.map(user => <tr className="bg-light" key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.price}</td>
                            {/* <td><img src={deletePic} onClick={() => deleteCar(user._id)} className="bg-danger rounded" style={{ cursor: 'pointer', height: '4vh' }} alt="" /></td> */}
                            <td>  <button onClick={() => deleteService(user._id)}> delete</button> </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;