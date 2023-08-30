import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png'
import './TopNav.css'

function TopNav() {
  return (
    <Navbar collapseOnSelect className="nv" expand="lg"
    // style={{
    //   backgroundColor:"gray"
    // }}
    >
      <Container className='main-div'
      // style={{
      //   backgroundColor:"blue"
      // }}
      >
        <Navbar.Brand href="#home" className='brand-div'>
          <img src={logo} alt="logo" className='logo' />
          <span className='brand'>
            treaty
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          id=''
          aria-controls="responsive-navbar-nav" className='toggle' />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className='links'>
            <Nav.Link href="#" className='link'>Home</Nav.Link>
            <Nav.Link href="#" className='link' >About us</Nav.Link>
            <Nav.Link href="#" className='link' >Services</Nav.Link>
            <Nav.Link href="#" className='link' >Contact us</Nav.Link>
          </Nav>
          <Button variant="info" className='btn'>Login / Register</Button>{' '}
        </Navbar.Collapse>
        {/* <Navbar.Collapse id="responsive-navbar-nav" className=''>
          <Nav style={btndiv}>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default TopNav;