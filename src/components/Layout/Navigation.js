import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink, } from "react-router-dom";
import NavLogo from "../../assets/images/logo_small.png";
import Home from "../home/Home";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

function Navigation() {
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="sm" sticky="top">
                    
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav ml-auto">
                            <NavLink to="/about" id="nav-link">
                                About me
                            </NavLink>
                            <NavLink to="/contact" id="nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="/portfolio" id="nav-link">
                                Portfolio
                            </NavLink>
                            
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                
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