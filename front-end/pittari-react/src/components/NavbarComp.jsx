import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../state/slice/usersSlice'; 
import axios from '../api/axios';
import logo from '../assets/img/logoP.jpg';
import { Person, Search } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export default function NavbarComp() {
  const isLoggedIn = useSelector(state => state.users.token !== null); 
  const [loadingLogout, setLoadingLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401 && isLoggedIn) {
          // quando si riceve questo errore, esegue il logout automaticamente 
          if (localStorage.getItem('token')) {
            handleLogout(); 
          }
        }
        return Promise.reject(error);
      }
    );
  
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [isLoggedIn]);

  const handleLogout = async () => {
    setLoadingLogout(true);
    try {
        await axios.post("/logout"); 
        localStorage.removeItem('token'); 
        localStorage.removeItem('cookieAccepted');
        dispatch(logoutUser()); 
        navigate('/');
        setLoadingLogout(false);
    } catch (error) {
       /*  console.error("Errore durante il logout:", error); */
        localStorage.removeItem('token');
        localStorage.removeItem('cookieAccepted');
        dispatch(logoutUser()); 
        navigate('/');
        setLoadingLogout(false);
    }
  };
  

  return (
    <Navbar expand="lg" className="bg-primary position-sticky z-3 top-0 w-100">
      {loadingLogout &&
        <div className='position-fixed bottom-0 start-0 bg-primary text-light rounded-5 p-4 m-3 shadow'>
          <p>Sto eseguendo il logout...</p>
        </div>
      }
      <Container fluid>
        <NavLink to="/" className="navbar-brand text-dark"><img src={logo} className='rounded-circle p-1' alt="logo pittari" /></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='d-flex align-items-center'>
              <NavLink to="/" className="nav-link text-light" activeclassname="active">Home</NavLink>
              {/* Mostra il pulsante di logout solo se l'utente è loggato */}
              {isLoggedIn ? (
                <>
                  <Dropdown className='nav-link'>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      <Person />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-menu'>
                      <NavLink className='dropdown-item' to='/profile'>Profile</NavLink>
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <NavLink to="/login" className="nav-link text-light ms-3" activeclassname="active">Login</NavLink>
              )}
            </div>
          </Nav>

          <Nav className="d-flex">
            <NavLink to="/search" className="nav-link text-light ms-3" activeclassname="active"><Search /></NavLink>
            <NavLink to="/articles" className="nav-link text-light ms-3" activeclassname="active">Articoli</NavLink>
            
            {isLoggedIn && (
            <NavLink to="/forum" className="nav-link text-light ms-3" activeclassname="active">Forum</NavLink>
            )}
            <NavLink to="/contacts" className="nav-link text-light ms-3" activeclassname="active">Contatti</NavLink>
            
            {isLoggedIn && (
            <NavLink to="/learn" className="nav-link text-yellow ms-3 border border-2 border-warning rounded-5 px-4 impara" activeclassname="active">Impara</NavLink>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
