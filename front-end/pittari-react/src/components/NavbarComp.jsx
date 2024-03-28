import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';  
import logo from '../assets/img/logo.jpg'

export default function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <NavLink to="/" className="navbar-brand text-dark"><img src={logo} className='rounded-circle p-1' alt="logo pittari" /></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link text-light" activeclassname="active">Home</NavLink>
          </Nav>

          <Nav className="d-flex">
            <NavLink to="/articles" className="nav-link text-light ms-3" activeclassname="active">Articoli</NavLink>
            <NavLink to="/forum" className="nav-link text-light ms-3" activeclassname="active">Forum</NavLink>
            <NavLink to="/contacts" className="nav-link text-light ms-3" activeclassname="active">Contatti</NavLink>
            <NavLink to="/learn" className="nav-link text-yellow ms-3 border border-2 border-warning rounded-5 px-4 impara" activeclassname="active">Impara</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
