import React from 'react';
import { Container, Col, Row, Card, Accordion } from "react-bootstrap";
import MainHeader from "../../layout/MainHeader";
import SubHeader from "../../layout/SubHeader";
import BackToTop from "../../layout/BackToTop";
import ImageGallery from 'react-image-gallery';
import {imagesSpaceX} from "./images/imagesSpaceX";




class PortfolioGallery extends React.Component {
  render() {
    return <ImageGallery 
                    items={imagesSpaceX}
                    autoPlay={false} 
                    showPlayButton={false}     
            />;      
  }
}


function SpaceXMicro() {
    return (
        <>
            <div className="main-container dark">
                <Container>
                    <div className="content-box content-box-portfolio">
                        <MainHeader title="SpaceX"/>
                        <SubHeader title="School Project" />
                        <Row className="justify-content-md-center">
                            <Col className="col-md-12 carousel-col">
                                <PortfolioGallery/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col className="col-md-5 accordion-col">
                            <div className="text-box">
                                <Accordion defaultActiveKey="0" className="aboutAccord">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <SubHeader title="Description" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                    <p>We were to build an online microsite for SpaceX or NASA (I chose SpaceX), to raise
                                                    awareness about space program activity around the world. The site should appeal to
                                                    a specific target audience and provide links to more information, live feeds of launches, and so forth</p>
                                                    <p><b>Some of the requirements</b></p>
                                                    <ul>
                                                        <li>Create a microsite for SpaceX/NASA The site should include a minimum of (4)
pages, be responsive, and function well on a variety of platforms.</li>
                                                        <li>The site should employ Javascript/JSON API for dynamic data</li>
                                                        <li>An HTML5 contact form with Javascript validation is required.</li>
                                                        <li>Conform to WCAG standards.</li>
                                                    </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <SubHeader title="Comment" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                    <p>My idea for the target audience is mainly adults/young adults whom are
                                                    looking for an introduction to SpaceX, and the micro site will serve as a portal to
                                                    “SpaceX knowledge”. They might not be familiar with the company at all, but are
                                                    curious about their goals and missions.</p>
                                                    <p>Known faults: The nav-bar links is not center aligned on mobile devices.</p>
                                                    <p>
                                                    <i>NB! Some of the information on the page might be outdated as the JSON file has
been updated since summer 2019. </i></p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className="text-box">
                                    <ul className="button-list portfolio">
                                        <SubHeader title="Links" />
                                        <li>
                                            <div className="mainButton"> <a href="http://badponydesigns.com/exam/">Web Version</a></div>
                                        </li>
                                        <li>
                                            <div className="mainButton"> <a href="https://github.com/mie91/2019-06-16_project_exam_repository_clean_version_mhb">Git Hub</a></div>
                                        </li>
                                    </ul>

                                    <SubHeader title="Details" />
                                    <ul className="info-list">
                                        <li><b>Created</b>: Spring, 2019</li>
                                        <li>School Project</li>
                                        <li>Vanilla Javascript</li>
                                        <li>API</li>
                                        <li>CSS</li>
                                        <li>Responsive</li>
                                        
                                    </ul>

                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <BackToTop />
                </Container>
            </div>
        </>
    );
}

export default SpaceXMicro;