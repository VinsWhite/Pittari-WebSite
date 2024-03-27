import Card from 'react-bootstrap/Card';
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import welcome from '../../assets/img/welcome.png'
import Container from 'react-bootstrap/esm/Container';

export default function HeroComp() {
  return (
    <Container fluid className='containter-fluid'>
        <Card className="card bg-secondary">
        <Card.Body>
            <Card.Text>
                <Row>
                    <Col> <img src={welcome} className='welcome' alt="" /> </Col>
                    <Col></Col>
                </Row>
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
  )
}
