import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import './Admin.css'



const MakeAdmin = () => {
    const { loggedInUser } = useContext(UserContext);
    // const { register, handleSubmit, watch, errors } = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('New Admin Added successfully')
                }
            })
    }

    return (
            <div className="admin-service">
        <div className="">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-md-9 mt-5">
                        <div className="d-flex justify-content-around">
                            <h2>Add Admin</h2>
                            <h4>{loggedInUser.name}</h4>
                        </div>
                        <form className="container
                         container-fluid"
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ width: '70vw', marginTop: '5%' }}
                        >
                            <div className="form-group">
                                <input className="form-control" name="email" placeholder="New Admin Email" {...register("email", { required: true })} /><br />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>

                            <input class="pr-5 pl-5 bg-dark text-white pt-2 pb-2"
                                style={{ borderRadius: "5px" }} type="submit"
                                value="Add Admin" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
        </div>

    );
};

export default MakeAdmin;