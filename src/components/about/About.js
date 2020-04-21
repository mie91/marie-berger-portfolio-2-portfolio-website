import React from 'react';
import { Container, Col, Row, Jumbotron, Image } from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";

function About () {
    return (
       <>
       <div className="main-container dark">
           <Row>
               <Col className="col-md-6">
                   <div className="text-box">
                   <MainHeader title="About me"/>
                   </div>
               </Col>
               <Col className="col-md-6">
               </Col>
           </Row>
       </div>
       </>
    );
}
export default About;