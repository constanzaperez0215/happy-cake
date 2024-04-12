import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <Navbar expand="lg" bg="danger" >
      <Container className='inicio'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Link className='nav-item nav-link' to='/home' style={{ color: 'white' }}><i className="fa-solid fa-house"></i> Home</Link>
            <Link className='nav-item nav-link' to='/contacto' style={{ color: 'white' }}><i className="fa-solid fa-phone"></i> Contacto</Link>
          </Nav>
        </Navbar.Collapse >
        <Navbar.Brand className='titulo' href="#home" style={{ color: 'white' }}><i className="fa-solid fa-cake-candles"></i> Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>

  );
}

export default NavBar