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
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand><img alt="Bad Pony logo" src={NavLogo} width="150" height="100" className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                        <NavLink to="/" exact id="nav-link">
                            Home
                            </NavLink>
                        <NavLink to="/about" id="nav-link">
                            About me
                            </NavLink>
                        <NavLink to="/contact" id="nav-link">
                            Contact
                            </NavLink>
                    <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/portfolio" id="nav-link">Website Design</NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio" id="nav-link">Graphic Designs</NavDropdown.Item>
                        <NavDropdown.Divider />
                            <NavDropdown.Item href="/portfolio" id="nav-link">Photography</NavDropdown.Item>
                    </NavDropdown>
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