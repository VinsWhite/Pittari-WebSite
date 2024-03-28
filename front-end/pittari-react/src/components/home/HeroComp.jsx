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
                    <Col xs={12} md={5}> <img src={welcome} className='welcome' alt="immagine di welcome" /></Col>
                    <Col xs={12} md={7} className='d-flex align-items-center text-start'>
                      <div>
                        <h2 className='fw-semibold text-primary fw-bold'>Impara il giapponese con Pittari! 🍣</h2>
                        <h5>Pensi che il <span className='fw-semibold'>giapponese</span> sia una lingua difficile?</h5>
                        <h5>Hai bisogno di imparare nuove parole <span className='fw-semibold'> 新しい単語 </span>?</h5>
                        <h5>Sei nel posto giusto!</h5>
                      </div>
                    </Col>
                </Row>
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
  )
}
