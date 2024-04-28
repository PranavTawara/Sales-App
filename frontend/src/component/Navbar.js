import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'

function NavBar() {
    
  return (
    <Navbar collapseOnSelect expand="lg" bg='primary'>
      <Container>
        <Navbar.Brand className="text-white" href="/addsales">Sales App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-0 design">
            <Nav.Link className="text-white" href="/addsales">ADD SALES</Nav.Link>
            <Nav.Link className="text-white" href="/topsales">TOP 5 SALES</Nav.Link>
            <Nav.Link className="text-white" href="/totalrevenue">TODAY'S TOTAL REVENUE</Nav.Link>
            <Nav.Link className="text-white" href="/login">LOGIN</Nav.Link>
            <Nav.Link className="text-white" href="/Register">REGISTER</Nav.Link>
            <Nav.Link className="text-white" href="#">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
