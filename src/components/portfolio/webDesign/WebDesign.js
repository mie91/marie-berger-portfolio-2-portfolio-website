import React from 'react';
import { Container, Col, Row, Image, Card, Button } from "react-bootstrap";
import MainHeader from "../../layout/MainHeader";
import SubHeader from "../../layout/SubHeader";
import BackToTop from "../../layout/BackToTop";
import SpaceX from "../../../assets/images/spaceX_1.jpg";
import Recycle from "../../../assets/images/recycle_1.jpg";
import Gameof from "../../../assets/images/gameof_1.jpg";

function WebDesign () {
return (
<>
    <div className="main-container dark">
        <Container>
            <div className="content-box content-box-portfolio-portal ">
                <MainHeader title="webdesign" />
                <SubHeader title="School Projects" />
                    <Row className="justify-content-center">

                        <Card className="portfolio-portal-card">
                            <a href="/"><Card.Img variant="top" src={Recycle} alt="screenshot from project" />
                                <Card.Body>
                                   <SubHeader title="Re-Cycle"/>
                                   
                                </Card.Body></a>
                            </Card>
                        
                        <Card className="portfolio-portal-card">
                            <a href="/"><Card.Img variant="top" src={SpaceX} alt="screenshot from project" />
                                <Card.Body>
                                <SubHeader title="SpaceX" />
                                    
                                </Card.Body></a>
                            </Card>
                        

                        
                            <Card className="portfolio-portal-card">
                            <a href="/"><Card.Img variant="top" src={Gameof} alt="screenshot from project" />
                                <Card.Body>
                                <SubHeader title="Game Of Tubbies" />
                                    
                                </Card.Body></a>
                            </Card>
                        

                   
                </Row>
            </div>
            <BackToTop />
        </Container>
    </div>
</>
);
}
export default WebDesign;