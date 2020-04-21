import React from 'react';
import { Container, Col, Row, Jumbotron, Image, Card, Accordion } from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import Profile1 from "../../assets/images/profileimg.jpg"

function About () {
return (
<>
    <div className="main-container dark">
        <Container>
            <Row>

                <Col className="col-md-6">
                <div className="text-box">
                    <MainHeader title="About" />
                    <p>Irure ad incididunt exercitation ex incididunt ullamco laboris reprehenderit excepteur enim ad
                    irure.
                    Ea anim sint dolore dolore consequat consectetur do magna.</p>
                    <p>Reprehenderit qui nulla Lorem nisi non ut nulla consequat. Sit voluptate adipisicing consectetur elit nulla qui do pariatur pariatur esse.</p>
                   
                    
                            <Accordion defaultActiveKey="0" className="aboutAccord">
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <SubHeader title="Skills" />
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Quis ex est laboris eiusmod cupidatat. Magna sit velit cupidatat laboris. Officia deserunt dolore minim aliquip mollit duis culpa ad. In incididunt occaecat aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor esse exercitation cupidatat eiusmod nulla.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <SubHeader title="Interests" />
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <SubHeader title="Education" />
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                </div>
                </Col>
                <Col className="col-md-6">
                    <div className="profileImage d-flex justify-content-center">
                        <Image fluid src={Profile1} alt="Employees at Re-Cycle office" />
                    </div>
                    <div className="text-box">
                            <SubHeader title="Front-End skills" />
                            <ul className="skills-list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>SASS</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe XD</li>
                                <li>Git</li>
                            </ul>
                    </div>
                   
                </Col>
            </Row>
        </Container>
    </div>
</>
);
}
export default About;