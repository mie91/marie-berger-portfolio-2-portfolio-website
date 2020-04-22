import React, { useState } from "react";
import { Button, Col, Form, Container, Row, Jumbotron } from "react-bootstrap"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import MainHeader from "../layout/MainHeader";
import ErrorMessage from "../contact/ErrorMessage";
import BackToTop from "../layout/BackToTop";

const telephoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({

    firstName: yup
        .string()
        .required("Required"),

    lastName: yup
        .string()
        .required("Required"),

    telephoneNumber: yup
        .string().matches(telephoneRegExp, "Not valid"),

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
            <div className="container-orange">
                <Jumbotron className="contactJumbo" alt="Image of Paris skyline">
                    <MainHeader title="Contact" />
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="infoBox">
                                <MainHeader title="Any questions? Want a customized tour?" />
                                <p>Est ad veniam culpa occaecat velit et et irure amet do cillum sit incididunt magna. Non enim
                                aliquip aliqua id laborum. Voluptate sit sunt ut ut enim deserunt mollit id officia est non cillum.</p>
                                <p>Dolor id dolor ea elit duis non. Enim occaecat nulla esse commodo ad ea. Eiusmod elit mollit consequat irure nulla ipsum elit dolor minim eiusmod.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="container-sea container-border">
                <Container>
                    <div className="formBox">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col className="col-md-6">
                                <Form.Group>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control name="firstName" placeholder="First Name" ref={register} />
                                    {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                                </Form.Group>
                                </Col>
                                    <Col className="col-md-6">
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control name="lastName" placeholder="Last Name" ref={register} />
                                    {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                                </Form.Group>
                                </Col>
                            </Row>
                                <Row>
                            <Col className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name="email" placeholder="E-mail" ref={register} />
                                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                                    </Form.Group>

                                <Form.Group>
                                    <Form.Label>Telephone</Form.Label>
                                    <Form.Control name="telephoneNumber" placeholder="Example: 98765432" ref={register} />
                                    {errors.telephoneNumber && <ErrorMessage>{errors.telephoneNumber.message}</ErrorMessage>}
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control as="select">
                                        <option>General</option>
                                        <option>Book Tour</option>
                                        <option>Custom Tour</option>
                                        <option>Feedback</option>
                                        <option>Refunds</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>    
                            </Col>
                            <Col className="col-md-6">
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="8"
                                        name="message"
                                        placeholder="Enter your message here"
                                        ref={register}/>
                                    {errors.message && ( <ErrorMessage>{errors.message.message}</ErrorMessage> )}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-12">
                                <Button className="formButton" type="submit">Submit</Button>
                                {validated && <div className="formValidated">Your request was validated!</div>}
                            </Col>
                        </Row>
                    </Form>
                    </div>
                </Container>
                <br></br>
            </div>
            <div className="container-teal container-border">
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="infoBox infoBox-teal">
                                <MainHeader title="Contact Info" />
                                <div className="contact-info">
                                <p>Veniam ipsum ex sit culpa cillum fugiat laborum culpa duis incididunt adipisicing. Ex labore dolor deserunt sint quis sit ipsum in fugiat. Deserunt velit qui do eu velit. Minim tempor ullamco ullamco mollit tempor nulla anim officia. Incididunt pariatur laboris ipsum duis in est.</p>
                                <ul>
                                    <li>Phone : (+33) 98765432</li>
                                    <li>Address : 15 Rue de Monttessuy, 75007 Paris, France</li>                                  
                                </ul>
                                    <div className="eyeCatchButton"> <a rel="noopener noreferrer" href="https://www.google.com/maps/dir//15+Rue+de+Monttessuy,+75007+Paris,+Frankrike/@48.85982,2.299404,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47e66fe05db00dcb:0x7c9c1dbd48d809ff!2m2!1d2.2982247!2d48.8592431!3e0?hl=no-NO" target="_blank">See Map</a></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <BackToTop/>
            </div>
        </>
    );
}

export default Contact;