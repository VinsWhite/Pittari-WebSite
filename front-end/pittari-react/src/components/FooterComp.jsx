import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function FooterComp() {
  return (
    <>
        <Container fluid className='bg-primary-darker p-5 text-center'>
        <Row>
            <Col sm={12} md={4} className='d-flex flex-column'>
                <h3 className='fw-semibold text-secondary'>Chi sono?</h3>
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
            <Col sm={12} md={4} className='d-flex flex-column mt-4 mt-md-0'>
                <h3 className='fw-semibold text-secondary'>Placeholder</h3>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
            </Col>
        </Row>
        </Container>
    </>
  )
}
