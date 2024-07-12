import React from "react";
import {Link} from "react-router-dom"
import Nav from "react-bootstrap/Nav"

const NavMenuList = () => {

return (
    
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
          <Nav.Link as={Link} to="/bootcamp">Bootcamp</Nav.Link>
          <Nav.Link as={Link} to="/resume-download">Resume</Nav.Link>
          <Nav.Link as={Link} to="/coding-projects">Projects</Nav.Link>
          </Nav>
);
};
export default NavMenuList;