import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand, NavbarToggle } from 'react-bootstrap';
import  { Link } from "react-router-dom";

function Header() {
    return (
     
    <header>

<Navbar expand="lg" className='bg-body-tertiary'>
<Container>
<NavbarBrand href="/"> Portfolio </NavbarBrand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Navbar/>
        </Navbar.Collapse>
      


</Container>

      </Navbar>
    </header>
        
    );
}
export default Header;
