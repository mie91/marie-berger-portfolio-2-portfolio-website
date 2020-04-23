import React, { useState } from "react";
import { Button, Col, Form, Container, Row } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MainHeader from "../layout/MainHeader";
import ErrorMessage from "../contact/ErrorMessage";
import BackToTop from "../layout/BackToTop";

const schema = yup.object().shape({

    firstName: yup
        .string()
        .required("Required"),

    lastName: yup
        .string()
        .required("Required"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),

    message: yup
        .string()
        .required("Please enter your message")
        .min(10, "Message is to short")
        .max(300, "Message is too long")
});


function Contact() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
        setValidated(true);
    }

    return (
        <>
            <div className="main-container dark">
                <Container>
                    <div className="content-box content-box-about">
                        <MainHeader title="contact" />
                    <Row className="justify-content-md-center">
                        <Col className="col-md-6">
            <p>Ut ex nisi pariatur sunt nisi mollit duis aute duis. Velit occaecat veniam commodo eiusmod aliquip magna ipsum incididunt laboris dolore. Exercitation elit pariatur sunt irure nostrud qui ipsum reprehenderit eiusmod.</p>
                        </Col>
                    </Row>
                    <div className="formBox">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="justify-content-md-center">
                            <Col className="col-md-3">
                                <Form.Group>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control name="firstName" placeholder="First Name" ref={register} />
                                    {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                                </Form.Group>
                                </Col>
                                    <Col className="col-md-3">
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control name="lastName" placeholder="Last Name" ref={register} />
                                    {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                            <Col className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name="email" placeholder="E-mail" ref={register} />
                                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                                    </Form.Group>
  
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        name="message"
                                        placeholder="Enter your message here"
                                        ref={register}/>
                                    {errors.message && ( <ErrorMessage>{errors.message.message}</ErrorMessage> )}
                                </Form.Group>
                            </Col>
                            
                        </Row>
                                <Row className="justify-content-md-center">
                                    <Col className="col-md-6">
                                        {validated && <div className="formValidated">Your request was validated!</div>}
                                        <Button className="formButton" type="submit">Send</Button>
                                        
                                    </Col>
                                </Row>
                    </Form>
                    </div>
                    </div>
                </Container>
               <BackToTop/>
            </div>
            
        </>
    );
}

export default Contact;