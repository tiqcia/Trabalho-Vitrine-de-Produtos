import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; 
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom" > 
      <Container>
        <Navbar.Brand href="#home">☆ Pinterest Store</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;