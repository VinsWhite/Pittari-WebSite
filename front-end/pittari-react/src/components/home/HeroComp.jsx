import Card from 'react-bootstrap/Card';
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import welcome from '../../assets/img/welcome.png'
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HeroComp() {
  const [isJapanese, setIsJapanese] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJapanese(prevState => !prevState); // cambia tra giapponese e 日本語
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className='containter-fluid'>
        <Card className="card bg-secondary">
        <h2 className='animatedTitle fw-semibold text-secondary fs-1 fw-bold mt-3 border bg-primary-emphasis mx-5 p-2 rounded-5 text-uppercase shadow'>Impara il giapponese con Pittari!</h2>
        <Card.Body>
                <Row>
                    <Col xs={12} md={5}> <img src={welcome} className='welcome' alt="immagine di welcome" /></Col>
                    <Col xs={12} md={7} className='d-flex align-items-center text-start px-4'>
                      <div>
                        <h5>Pensi che il <span className='animatedText'><span className='fw-semibold'>{isJapanese ? 'giapponese' : '日本語'}</span></span> sia una lingua difficile?</h5>
                        <h5 className='animatedText'>Hai bisogno di imparare <span className='fw-semibold'><span className='fw-semibold'>{isJapanese ? 'nuove parole' : '新しい単語'}</span></span>?</h5>
                        <h5>Sei nel posto giusto!</h5>
                      </div>
                    </Col>
                </Row>
        </Card.Body>
        </Card>
    </Container>
  )
}
