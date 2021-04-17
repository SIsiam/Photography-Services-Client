import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import SideBar from '../Admin/SideBar/SideBar';

const AddReview = () => {
    const { loggedInUser } = useContext(UserContext);
    const [review, setReview] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory();


    const onSubmit = data => {
        const review = { ...loggedInUser, ...data };
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json(review))
            .then(result => {
                if (result) {
                    alert('Your review has been updated successfully')
                    history.replace('/')
                }
            })

    };
    
    return (
        <div style={{ backgroundColor: '#D9AFD9', backgroundImage:'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)', position:'relative',height:'100vh'
}}>
    <div className="d-flex container-fluid p-3 ">
        <h4 style={{ marginLeft: "10vw" }}>Add A Review For Aur Company</h4>
        <h5 className="ml-auto">{loggedInUser.name}</h5>
    </div>
{/* <SideBar /> */ }
<div className="">
    <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
            <input name="name" className="p-4 form-control" defaultValue={loggedInUser.name}
                {...register("name", { required: true })} />
            {errors.name && <span className="text-danger">This field is required</span>}
        </div>
        <br />

        <div className="form-group">
            <input name="designation" className="p-4 form-control" placeholder="Your Company's name, designation" {...register("designation", { required: true })} />
            {errors.designation && <span>This field is required</span>}
        </div>

        <br />
        <div className="form-group">
            <input name="comment" className="form-control" placeholder='Description' style={{ height: "20vh" }} {...register("comment", { required: true })} />
            {errors.comment && <span>This field is required</span>}
        </div>
        <br />

        <div className="form-group">
            <input className="pr-5 pl-5 bg-dark text-white pt-2 pb-2" style={{ borderRadius: "5px" }} type="submit" />
        </div>

    </form>
</div>
        </div >
    );
};

export default AddReview;