import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from 'react-bootstrap';
import Link from "react-router-dom"

function Header() {
    return (

        <Navbar expand="lg" className='bg-body-tertiary'>
<Container>
    <NavbarBrand href="Home"> Portfolio </NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="About Me" as={Link} to="/about" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/resume-download">Resume</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bootcamp" as={Link} to="/bootcamp" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="#">Mentors</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#">feedback</NavDropdown.Item>
            
            </NavDropdown>

          <Nav.Link as={Link} to="">PlaceHolder</Nav.Link>
            <Nav.Link as={Link} to="#">Contact Me</Nav.Link>

          </Nav>
        </Navbar.Collapse>
</Container>

        </Navbar>
    );
}