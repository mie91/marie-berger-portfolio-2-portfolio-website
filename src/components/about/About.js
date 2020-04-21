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
                <div className="about">
            <Row>
                <Col className="col-md-6">
                <div className="text-box">
                    <MainHeader title="About" />
                    
                    <Accordion defaultActiveKey="0" className="aboutAccord">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <SubHeader title="Skills" />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Quis ex est laboris eiusmod cupidatat. Magna sit velit cupidatat laboris.
                                    Officia deserunt dolore minim aliquip mollit duis culpa ad. In incididunt occaecat
                                    aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor esse exercitation
                                    cupidatat eiusmod nulla.</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <SubHeader title="Experience" />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Anim adipisicing sint quis nulla id. Fugiat dolore minim duis nulla deserunt cillum amet do labore. Sint amet fugiat labore esse dolore pariatur est cupidatat et veniam. Magna duis irure mollit ullamco et exercitation in est dolore magna ipsum. Officia ut minim sint ea irure consequat cillum anim irure amet elit do. Laboris veniam eu amet amet.</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                <SubHeader title="Education" />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                
                                <Card.Body>Aliquip voluptate eu amet culpa labore quis excepteur est laboris ipsum. Ad dolore est sunt pariatur cupidatat. Nostrud do commodo reprehenderit nostrud nisi. Aute adipisicing esse amet ullamco consectetur voluptate cupidatat velit eu Lorem esse tempor excepteur tempor.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <SubHeader title="Current" />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>Quis ex est laboris eiusmod cupidatat. Magna sit velit cupidatat laboris.
                                        Officia deserunt dolore minim aliquip mollit duis culpa ad. In incididunt occaecat
                                        aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor esse exercitation
                                    cupidatat eiusmod nulla.</Card.Body>
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
                                <SubHeader title="Information" />
                                <ul className="info-list">
                                    <li><b>Location</b>: Bergen, Norway</li>
                                    <li><b>Birthdate</b>: 02-09-1991</li>
                                </ul>
                    <SubHeader title="Keywords" />
                    <ul className="skills-list">
                        <li>Front-End Developer</li>
                        <li>Marketing Bachelor</li>
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
                        <li>Dev Ops</li>
                        <li>Norwegian</li>
                        <li>English</li>
                    </ul>
                </div>

                </Col>
            </Row>
                </div>
        </Container>
       
    </div>
</>
);
}
export default About;