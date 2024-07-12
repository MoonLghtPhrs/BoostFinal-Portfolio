import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand, NavbarToggle, ThemeProvider } from 'react-bootstrap';
import  { Link } from "react-router-dom";
import NavMenuList from './NavMenuList';
function Header() {
    return (
     
    <header>

<Navbar expand="md" className='bg-body-tertiary'>
<Container>
<Navbar.Brand href="/"> Portfolio </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          
        </Nav>
          <NavMenuList/>
        </Navbar.Collapse>
      


</Container>

      </Navbar>
     
    </header>
        
    );
}
export default Header;
