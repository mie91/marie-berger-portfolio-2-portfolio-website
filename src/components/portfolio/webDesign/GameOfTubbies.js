import React from 'react';
import { Container, Col, Row, Card, Accordion } from "react-bootstrap";
import MainHeader from "../../layout/MainHeader";
import SubHeader from "../../layout/SubHeader";
import BackToTop from "../../layout/BackToTop";
import ImageGallery from 'react-image-gallery';
import {imagesGameOf} from "./images/imagesGameOf";


class PortfolioGallery extends React.Component {
  render() {
    return <ImageGallery 
                    items={imagesGameOf}
                    autoPlay={false} 
                    showPlayButton={false}     
            />;      
  }
}

function GameOfTubbies() {
    return (
        <>
            <div className="main-container dark">
                <Container>
                    <div className="mainButton inverted"> 
                        <a href="./webdesign">Return</a>
                    </div>
                    <div className="content-box content-box-portfolio">
                        <MainHeader title="game of tubbies"/>
                        <SubHeader title="School Project" />
                        <Row className="justify-content-md-center">
                            <Col className="col-md-12 carousel-col">
                                <PortfolioGallery/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col className="col-md-5 accordion-col">
                            <div className="text-box">
                                <Accordion defaultActiveKey="0" className="infoAccord">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <SubHeader title="Description" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                    <p>We were to build an online board game for Game of Thrones, and it had to be
                                                    made
                                                    using HTML, CSS and JavaScript.</p>                                        
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <SubHeader title="Comment" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                    <p>The game play is almost none existent, and I would love to add
                                                    more elements later, such as 2 player, more variations in traps, sounds and a more
                                                    exciting board. I would also like to update the character designs (faces especially) as I
                                                    did not have a lot of time to spend on them as I would like.</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className="text-box">
                                    <ul className="button-list portfolio">
                                        <SubHeader title="Links"/>
                                        <li>
                                            <div className="mainButton"> <a href="http://badponydesigns.com/year2_exam/index.html">Web Version</a></div>
                                        </li>
                                        <li>
                                            <div className="mainButton"> <a href="https://github.com/mie91/year2_exam/tree/the-main">Git Hub</a></div>
                                        </li>
                                    </ul>
                                    <SubHeader title="Details" />
                                    <ul className="info-list">
                                        <li><b>Created</b>: Winter 2019</li>
                                        <li>School Project</li>
                                        <li>Vanilla Javascript</li>
                                        <li>CSS</li>
                                        <li>Game</li>
                                        <li>Animation</li>
                                        <li>Character Design</li>
                                        <li>Responsive</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                <BackToTop/>
                </Container>
            </div>
        </>
    );
}

export default GameOfTubbies;