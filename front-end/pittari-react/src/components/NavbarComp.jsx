import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../state/slice/usersSlice'; 
import axios from '../api/axios';
import logo from '../assets/img/logo.jpg';

export default function NavbarComp() {
  const isLoggedIn = useSelector(state => state.users.token !== null); 
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post("/logout"); 
      localStorage.removeItem('token'); // rimuovo il token dal localstorage
      dispatch(logoutUser()); // dispatch per redux
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };

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
            
            {/* Mostra il pulsante di logout solo se l'utente è loggato */}
            {isLoggedIn && (
              <button onClick={handleLogout} className="nav-link text-light ms-3 border border-2 border-danger rounded-5 px-4">
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
