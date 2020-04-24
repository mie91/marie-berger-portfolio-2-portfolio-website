import React from 'react';
import { Container, Col, Row, Image, Card, Accordion } from "react-bootstrap";
import MainHeader from "../../layout/MainHeader";
import SubHeader from "../../layout/SubHeader";
import BackToTop from "../../layout/BackToTop";
import PlaceHolder from "../../../assets/images/spaceX_1.jpg";

function WebDesign () {
return (
<>
    <div className="main-container dark">
        <Container>
            <div className="content-box content-box-portfolio-portal">
                <MainHeader title="webdesign" />
                    <SubHeader title="School Projects" />
                    <Row>         
                    <Col className="col-md-12">
                            <div className="project-thumbnails-container  justify-content-center">
                                
                                <a href="/"><img className="btnIcon" src={PlaceHolder} alt="Instagram Logo" /></a>
                                <a href="/"><img className="btnIcon" src={PlaceHolder} alt="Facebook Logo" /></a>
                                <a href="/"><img className="btnIcon" src={PlaceHolder} alt="Git Hub logo" /></a>
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
export default WebDesign;



