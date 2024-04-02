import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionC1Comp from '../components/contacts/SectionC1Comp'
import ContactFormComp from '../components/contacts/ContactFormComp'

export default function Contacts() {
  return (
    <Container fluid className='p-5 bg-secondary'>
      <Row>
        <Col sm={12} md={6} className='d-flex align-items-center justify-content-center'><SectionC1Comp /></Col>
        <Col sm={12} md={6} className='d-flex align-items-center justify-content-center'><ContactFormComp /></Col>
      </Row>
    </Container>
  )
}
