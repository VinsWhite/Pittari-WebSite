import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import getCurrentYear from '../assets/functions/currentYear';
import { NavLink } from 'react-router-dom';

export default function FooterComp() {
  return (
    <footer className='bg-primary-darker text-light py-5'>
      <Container>
        <Row className='mb-4'>
          <Col xs={12} md={6} className='d-flex flex-column'>
            <div className='d-flex justify-content-around mb-3'>
              <a href="#" className='text-light me-3'><Facebook size={24} /></a>
              <a href="#" className='text-light me-3'><Instagram size={24} /></a>
              <a href="#" className='text-light me-3'><Twitter size={24} /></a>
              <a href="#" className='text-light'><Youtube size={24} /></a>
            </div>
            <h3 className='fw-bold text-secondary mb-3'>Risorse</h3>
            <ul className='list-unstyled mb-0'>
              <li><a href='https://app.kanjialive.com/api/docs' className='text-light text-decoration-none'>Kanji Alive</a></li>
              <li><a href='https://jisho.org/' className='text-light text-decoration-none'>Jisho Api</a></li>
              <li><a href='https://en.wiki.tatoeba.org/articles/show/api' className='text-light text-decoration-none'>Tatoeba Api</a></li>
              <li><a href='https://lottiefiles.com/' className='text-light text-decoration-none'>Animazioni</a></li>
            </ul>
          </Col>
          <Col xs={12} md={6} className='d-flex flex-column mt-4 mt-md-0'>
            <h3 className='fw-bold text-secondary mb-3'>Informazioni</h3>
            <ul className='list-unstyled mb-0'>
              <li><NavLink to='/privacy-policy' className='text-light text-decoration-none'>Privacy Policy</NavLink></li>
              <li><NavLink to="/contacts" className="text-light text-decoration-none">Contatti</NavLink></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p className='mb-0 text-secondary'>&copy; Pittari {getCurrentYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
