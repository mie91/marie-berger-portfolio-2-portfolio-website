import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
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
                <Navbar expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavLink to="/" exact>
                        <Navbar.Brand><img alt="Bad Pony logo" src={NavLogo} width="150" height="100" className="d-inline-block align-top" /></Navbar.Brand>
                    </NavLink>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" exact>
                            </NavLink>
                            <NavLink to="/" exact id="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/about" id="nav-link">
                                About me
                            </NavLink>
                            
                            <NavLink to="/portfolio" id="nav-link">
                                Portfolio
                            </NavLink>
                            <NavLink to="/contact" id="nav-link">
                                Contact
                            </NavLink>
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