import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'
import getCurrentYear from '../assets/functions/currentYear';

export default function FooterComp() {
  return (
    <>
        <Container fluid className='bg-primary-darker p-5 text-center'>
        <Row>
            <Col sm={12} md={4} className='d-flex flex-column'>
                <Container className='d-flex justify-content-around mb-3 mx-4'>
                    <a href="#" className='text-light'><Facebook /></a>
                    <a href="#" className='text-light'><Instagram /></a>
                    <a href="#" className='text-light'><Twitter/></a>
                    <a href="#" className='text-light'><Youtube /></a>
                </Container>
                <h3 className='fw-semibold text-secondary'>Risorse API</h3>
                <a href='https://app.kanjialive.com/api/docs' className='text-light text-decoration-none'>Kanji Alive</a>
            </Col>
            <Col sm={12} md={4} className='d-flex flex-column mt-4 mt-md-0'>
                <h3 className='fw-semibold text-secondary'>Placeholder</h3>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
            </Col>
            <Col sm={12} md={4} className='d-flex flex-column mt-4 mt-md-0'>
                <h3 className='fw-semibold text-secondary'>Placeholder</h3>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
            </Col>
            <p className='mt-4 text-light'>&copy; {getCurrentYear()} Pittari</p>
        </Row>
        </Container>
    </>
  )
}
