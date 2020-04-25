import React from 'react';
import { Container, Col, Row, Image, Card, Accordion } from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import BackToTop from "../layout/BackToTop";
import Profile1 from "../../assets/images/profileimg.jpg"
import Instagram from "../../assets/icons/instagram.png";
import Facebook from "../../assets/icons/facebook.png";
import GitHub from "../../assets/icons/github.png";
import Deviantart from "../../assets/icons/deviantart.png";
import LinkedIn from "../../assets/icons/linkedin.png";

function About () {
    return (
        <>
            <div className="main-container dark">  
                <Container>
                        <div className="content-box content-box-about">
                            <MainHeader title="about" />
                            <Row className="justify-content-md-center">
                                <Col className="col-md-5 accordion-col">
                                    <div className="text-box">
                                    <Accordion defaultActiveKey="0" className="infoAccord">
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                                    <SubHeader title="Me, Marie" />
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>
                                                        <p>Quis ex est laboris eiusmod cupidatat. Magna sit velit cupidatat laboris.
                                                            Officia deserunt dolore minim aliquip mollit duis culpa ad. In incididunt
                                                            occaecat
                                                            aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor esse
                                                            exercitation
                                                            cupidatat eiusmod nulla.</p>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                                    <SubHeader title="Experience" />
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Body>
                                                            <p>Anim adipisicing sint quis nulla id. Fugiat dolore minim duis nulla
                                                            deserunt cillum amet do labore. Sint amet fugiat labore esse dolore pariatur est
                                                            cupidatat et veniam. Magna duis irure mollit ullamco et exercitation in est
                                                            dolore magna ipsum. Officia ut minim sint ea irure consequat cillum anim irure
                                                            amet elit do. Laboris veniam eu amet amet.
                                                            </p>
                                                        </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                                    <SubHeader title="Education" />
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Body>
                                                        <p>Aliquip voluptate eu amet culpa labore quis excepteur est laboris ipsum.
                                                        Ad dolore est sunt pariatur cupidatat. Nostrud do commodo reprehenderit nostrud
                                                        nisi. Aute adipisicing esse amet ullamco consectetur voluptate cupidatat velit
                                                        eu Lorem esse tempor excepteur tempor. 
                                                        </p>
                                                        </Card.Body>
                                                </Accordion.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                                        <SubHeader title="Currently" />
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="4">
                                                        <Card.Body>
                                                            <p>Quis ex est laboris eiusmod cupidatat. Magna sit velit cupidatat
                                                                laboris.
                                                                Officia deserunt dolore minim aliquip mollit duis culpa ad. In
                                                                incididunt
                                                                occaecat
                                                                aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor
                                                                esse
                                                                exercitation
                                                                cupidatat eiusmod nulla.</p>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                                <Card>
                                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                                        <SubHeader title="Other" />
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey="5">
                                                        <Card.Body>
                                                            <p>Quis ex est laboris eiusmod cupidatat. Magna sit velit
                                                            cupidatat laboris.
                                                            Officia deserunt dolore minim aliquip mollit duis culpa ad. In
                                                            incididunt
                                                            occaecat
                                                            aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor esse
                                                            exercitation
                                                            cupidatat eiusmod nulla.
                                                            </p>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                    </div>
                                </Col>
                                <Col className="col-md-4 info-col">  
                                    <div className="profileImage d-flex justify-content-center">
                                        <Image fluid src={Profile1} alt="Employees at Re-Cycle office" />
                                    </div>
                                    <ul className="info-list">
                                        <li><b>Location</b>: Bergen, Norway</li>
                                        <li><b>Age</b>: 28</li>
                                    </ul>
                                    <div className="text-box">
                                        <SubHeader title="Keywords" />
                                        <ul className="skills-list">
                                            <li>Front-End Developer</li>
                                            <li>Marketing Bachelor</li>
                                            <li>HTML & CSS</li>
                                            <li>Javascript</li>
                                            <li>SASS</li>
                                            <li>React</li>
                                            <li>Bootstrap</li>
                                            <li>Adobe Photoshop</li>
                                            <li>Adobe Illustrator</li>
                                            <li>Adobe XD</li>
                                            <li>Dev Ops</li>
                                            <li>Norwegian</li>
                                            <li>English</li>
                                        </ul>
                                    </div>
                                    <div className="icon-container">
                                        <SubHeader title="Social Media" />
                                        <a href="/"><img className="btnIcon" src={Instagram} alt="Instagram Logo" /></a>
                                        <a href="/"><img className="btnIcon" src={Facebook} alt="Facebook Logo" /></a>
                                        <a href="/"><img className="btnIcon" src={GitHub} alt="Git Hub logo" /></a>
                                        <a href="/"><img className="btnIcon" src={Deviantart} alt="Deviantart Logo" /></a>
                                        <a href="/"><img className="btnIcon" src={LinkedIn} alt=" LinkedIn Logo" /></a>
                                    </div>
                                </Col> 
                            </Row>
                        </div>
                    < BackToTop/>
                </Container>
            </div>
        </>
    );
}

export default About;