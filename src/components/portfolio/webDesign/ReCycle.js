import React from 'react';
import { Container, Col, Row, Image, Card, Accordion } from "react-bootstrap";
import MainHeader from "../../layout/MainHeader";
import SubHeader from "../../layout/SubHeader";
import BackToTop from "../../layout/BackToTop";
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    
];

class PortfolioGallery extends React.Component {
  render() {
    return <ImageGallery 
                    items={images}
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
                    <div className="content-box content-box-portfolio">
                        <MainHeader title="re-cycle"/>
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
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <SubHeader title="Comment" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                Anim adipisicing sint quis nulla id. Fugiat dolore minim duis nulla
                                                deserunt cillum amet do labore. Sint amet fugiat labore esse dolore pariatur est
                                                cupidatat et veniam. Magna duis irure mollit ullamco et exercitation in est
                                                dolore magna ipsum. Officia ut minim sint ea irure consequat cillum anim irure
                                                amet elit do. Laboris veniam eu amet amet.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                </div>
                            </Col>
                            <Col className="col-md-4">
                                <div className="text-box">
                                    <ul className="button-list portfolio">
                                        <li>
                                            <div className="mainButton"> <a href="/">Web Version</a></div>
                                        </li>
                                        <li>
                                            <div className="mainButton"> <a href="/">Git Hub</a></div>
                                        </li>
                                    </ul>

                                    <SubHeader title="Details" />
                                    <ul className="info-list">
                                        <li><b>Created </b>: 2020</li>
                                        <li><b> </b>: 2020</li>
                                        <li><b>Created </b>: 2020</li>
                                        <li><b>Created </b>: 2020</li>
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

export default ReCycle;