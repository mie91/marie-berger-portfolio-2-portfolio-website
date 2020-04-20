import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink, } from "react-router-dom";
import NavLogo from "../../assets/images/logo_small.png";
import NavLogoText from "../../assets/images/logo_text_only_small.png";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";
import Webdesign from "../portfolio/categories/WebDesign";
import GraphicDesign from "../portfolio/categories/GraphicDesign";

function Navigation() {
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="sm" >
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <NavLink to="/" exact>
                    <img alt="" src={NavLogo} width="120" height="80" className="second-brand" />
                    </NavLink>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <NavLink to="/" exact>
                            <Navbar.Brand> <img alt="Bad Pony logo" src={NavLogoText} width="100" height="25" className="d-inline-block align-top" /></Navbar.Brand>
                        </NavLink>
                        <Nav className="navbar-nav ml-auto theNavlinks">
                            <NavLink to="/about" id="nav-link">
                                About me
                            </NavLink>
                            <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/portfolio" id="nav-link">Information</NavDropdown.Item>

                                <NavDropdown.Item href="/webdesign" id="nav-link">Webdesign</NavDropdown.Item>

                                <NavDropdown.Item href="/graphicdesign" id="nav-link">Graphic Designs</NavDropdown.Item>

                                <NavDropdown.Item href="/photo" id="nav-link">Photography</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/other" id="nav-link">Other</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/contact" id="nav-link">
                                Contact
                            </NavLink>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact}/>

                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/webdesign" component={Webdesign} />
                    <Route path="/graphicdesign" component={GraphicDesign} />
                
                </Switch>
            </Router>
            <footer>
                <div className="footercontent">
                    <div className="socialMedia">
                    </div>
                    <p>Copyright © 2020 Marie Helen Berger</p>
                </div>
            </footer>
        </>
    );
}

export default Navigation;