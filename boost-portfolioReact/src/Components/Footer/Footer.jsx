import { Container, Navbar, NavLink, Nav, NavbarCollapse } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Footer  = () => {
    return (
        <Container fluid className="bg-dark text-light py-3">
        <Container>
            {/* <Navbar expand="md">
                <Navbar.Collapse id="footer-nav">
                    <Nav className="mx-auto">
                        <NavLink as={Link} to="/">
                            Home
                        </NavLink>
                        <NavLink as={Link} to="/about">
                            About Me
                        </NavLink>
                        <NavLink as={Link} to="/bootcamp">
                            Bootcamp
                        </NavLink>
                        <NavLink as={Link} to="/coding-projects">
                            Coding Projects
                        </NavLink>
                        <NavLink as={Link} to="/resume-download">
                            Resume
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Navbar> */}
            <p className="text-center mt-3">
                <p> Copyright Vai Pearson. All rights reserved.</p>
                You are not authorized to use or make derivative works of any of the content on this page.
            </p>
        </Container>
    </Container>
    )
}
export default Footer;