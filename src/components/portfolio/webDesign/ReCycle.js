import React from 'react';
import { Container, Col, Row, Card, Accordion } from "react-bootstrap";
import MainHeader from "../../layout/MainHeader";
import SubHeader from "../../layout/SubHeader";
import BackToTop from "../../layout/BackToTop";
import ImageGallery from 'react-image-gallery';
import {imagesReCycle} from "./images/imagesReCycle";


class PortfolioGallery extends React.Component {
  render() {
    return <ImageGallery 
                    items={imagesReCycle}
                    autoPlay={false} 
                    showPlayButton={false}     
            />;      
    }
}

function ReCycle() {
    return (
        <>
            <div className="main-container dark">
                <Container>
                    <div className="mainButton inverted"> 
                        <a href="./webdesign">Return</a>
                    </div>
                    <div className="content-box content-box-portfolio">
                        <MainHeader title="re-cycle" />
                        <SubHeader title="School Project" />
                        <Row className="justify-content-md-center">
                            <Col className="col-md-12 carousel-col">
                            <PortfolioGallery />
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
                                                <p>Quis ex est laboris eiusmod cupidatat. Magna sit velit cupidatat
                                                    laboris.
                                                    Officia deserunt dolore minim aliquip mollit duis culpa ad. In
                                                    incididunt
                                                    occaecat
                                                    aute ex ullamco aute. Ipsum dolore nulla elit adipisicing dolor esse
                                                    exercitation
                                                    cupidatat eiusmod nulla.</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <SubHeader title="Comment" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                    <p>Anim adipisicing sint quis nulla id. Fugiat dolore minim duis nulla
                                                    deserunt cillum amet do labore. Sint amet fugiat labore esse dolore
                                                    pariatur est
                                                    cupidatat et veniam. Magna duis irure mollit ullamco et exercitation in
                                                    est
                                                    dolore magna ipsum. Officia ut minim sint ea irure consequat cillum anim
                                                    irure
                                                    amet elit do. Laboris veniam eu amet amet.</p>
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
                                        <div className="mainButton"> 
                                            <a href="https://unruffled-ritchie-b46d79.netlify.app/">Web Version</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mainButton"> 
                                            <a href="https://github.com/mie91/marie-berger-portfolio-2-html-and-css-ca">Git Hub</a>
                                        </div>
                                    </li>
                                </ul>
                                <SubHeader title="Details" />
                                <ul className="info-list">
                                    <li><b>Created</b>: April, 2020</li>
                                    <li>School Project</li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>SASS</li>
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

export default ReCycle;