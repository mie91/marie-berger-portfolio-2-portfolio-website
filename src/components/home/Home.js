import React from 'react';
import { Container, Col, Row, Jumbotron, Image } from "react-bootstrap";
import MainHeader from "../layout/MainHeader";
import SubHeader from "../layout/SubHeader";
import HugeLogo from "../../assets/images/logo_huge.png";

function Home () {
    return (
        <>
            <div className="main-container dark-gradient">
                <Container>
                    <Row>
                        <Col className="col-md-12">
                <div className="hugeLogo d-flex justify-content-center">
                    <Image fluid src={HugeLogo} alt="Employees at Re-Cycle office" />
                </div>
                        </Col>
                    </Row>
                
                </Container>
            </div>
       </>
    );
}
export default Home;