import React from 'react'
import Container from 'react-bootstrap/esm/Container'

export default function FooterComp() {
  return (
    <Container fluid className='containter-fluid'>
        <div className='d-flex justify-content-around p-5 bg-primary-darker'>
            <div className='d-flex flex-column'>
                <h3 className='fw-semibold text-secondary'>Chi sono?</h3>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
            </div>
            <div className='d-flex flex-column'>
                <h3 className='fw-semibold text-secondary'>Placeholder</h3>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
            </div>
            <div className='d-flex flex-column'>
                <h3 className='fw-semibold text-secondary'>Placeholder</h3>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
                <a href='#' className='text-light text-decoration-none'>Placeholder</a>
            </div>
        </div>
    </Container>
  )
}
