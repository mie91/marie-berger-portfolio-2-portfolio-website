import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink, } from "react-router-dom";
import NavLogo from "../../assets/images/logo_small.png";
import NavLogoText from "../../assets/images/logo_text_only_small.png";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Webdesign from "../portfolio/webDesign/WebDesign";
import GraphicDesign from "../portfolio/graphicDesign/GraphicDesign";
import ReCycle from "../portfolio/webDesign/ReCycle";
import SpaceXMicro from "../portfolio/webDesign/SpaceXMicro";
import GameOfTubbies from "../portfolio/webDesign/GameOfTubbies";

function Layout() {
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="sm">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                    <NavLink to="/" exact>
                        <img alt="" src={NavLogo} width="120" height="80" className="second-brand"/>
                    </NavLink>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <NavLink to="/" exact>
                            <Navbar.Brand> <img alt="Bad Pony logo" src={NavLogoText} width="110" height="25"
                                    className="d-inline-block align-top" />
                            </Navbar.Brand>
                        </NavLink>
                        <Nav className="navbar-nav ml-auto theNavlinks">
                            <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                                <NavDropdown.Item><NavLink to="/webdesign" id="nav-link">
                                Webdesign
                            </NavLink></NavDropdown.Item>



                                <NavDropdown.Item disabled href="/graphicdesign" id="nav-link">Graphic Designs (coming soon)</NavDropdown.Item>
                                <NavDropdown.Item disabled href="/photo" id="nav-link">Photo (coming soon)
                                </NavDropdown.Item>
                                <NavDropdown.Item disabled href="/other" id="nav-link">Art (coming soon)
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/about" id="nav-link">
                                About me
                            </NavLink>
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
                    <Route path="/contact" component={Contact} />
                    <Route path="/webdesign" component={Webdesign} />
                    <Route path="/graphicdesign" component={GraphicDesign} />
                    <Route path="/recycle" component={ReCycle} />
                    <Route path="/spacexmicro" component={SpaceXMicro} />
                    <Route path="/gameoftubbies" component={GameOfTubbies} />
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

export default Layout;