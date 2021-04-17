import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div className="" style={{ backgroundColor: ' aqua', paddingTop: "5%", paddingLeft: "5%", paddingRight: "5%" }}>
            
            {/* #FBD062 */}
            <div className="d-flex flex-wrap mt-5" >
           
                <div className="col-md-6 col-sm-6 container container-fluid">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" className="p-4" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Your name:</Form.Label>
                            <Form.Control type="name" placeholder="Your name or company name" className="p-4" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message:</Form.Label>
                            <Form.Control as="textarea" rows={8} placeholder="Your message" />
                            <Button variant="dark" type="submit" style={{ borderRadius: "5px" }} className="mb-5 mt-3 pr-5 pl-5">Submit</Button>
                        </Form.Group>
                    </Form>
                </div>
                
            </div>
           
        </div>
    );
};

export default ContactUs;

