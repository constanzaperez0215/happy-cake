import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (

    <Navbar expand="lg" className="navBar bg-body-tertiary">
      <Container className='inicio'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><i className="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link href="#link"><i className="fa-solid fa-phone"></i> Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className='titulo' href="#home"><i className="fa-solid fa-cake-candles"></i> Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>

  );
}

export default NavBar